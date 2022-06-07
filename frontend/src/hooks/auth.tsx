import React, { createContext, useCallback, useContext, useState } from 'react';
import { decode, JwtPayload } from 'jsonwebtoken';
import api from '../services/api';

interface IPermission {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  profile: string;
  profile_id: string;
  first_access: boolean;
  ramal: string | undefined;
  queue: string[];
  avatar: string | null;
  avatar_url: string;
  team_id: string;
  permissions: IPermission[];
  loa: string;
  group: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  verifyTokenExpiration(): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Precato:token');
    const user = localStorage.getItem('@Precato:user');

    if (token || user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  let refresh_token_new: string;

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user, refresh_token } = response.data;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    refresh_token_new = refresh_token;

    if (user.first_access) {
      localStorage.setItem('@Precato:token', token);

      localStorage.setItem('@Precato:user', JSON.stringify(user));

      setData({ token, user });
    }

    api.defaults.headers.authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Precato:token');
    localStorage.removeItem('@Precato:user');

    setData({} as AuthState);
  }, []);

  const verifyTokenExpiration = useCallback(async () => {
    const token = localStorage.getItem('@Precato:token');

    if (token) {
      const { exp } = decode(token) as JwtPayload;

      if (Date.now() >= Number(exp) * 1000) {
        try {
          const response = await api.post('/sessions/refresh-token', {
            token: refresh_token_new,
          });

          const { token: refresh_token } = response.data;

          localStorage.removeItem('@Precato:token');
          localStorage.setItem('@Precato:token', refresh_token);

          api.defaults.headers.authorization = `Bearer ${refresh_token}`;

          setData({ user: data.user, token: refresh_token });
        } catch (err) {
          signOut();
        }
      }
    }
  }, [data.user, refresh_token_new, signOut]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, verifyTokenExpiration }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
