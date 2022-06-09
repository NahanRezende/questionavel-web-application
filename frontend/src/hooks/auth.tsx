import React, { createContext, useCallback, useContext, useState } from 'react';
import jwt, { JwtPayload } from 'jsonwebtoken';
import api from '../services/api';

interface AuthState {
  token: string;
  accountId: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  isLogged: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Survey:token');
    const accountId = localStorage.getItem('@Survey:accountId');

    if (token) {
      api.defaults.headers['x-access-token'] = token;

      return { accountId, token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    await api
      .post('/login', {
        email,
        password,
      })
      .then(response => {
        if (response.status === 200) {
          const { accessToken } = response.data;

          api.defaults.headers['x-access-token'] = accessToken;

          const payload = jwt.decode(accessToken) as JwtPayload;

          setData({ accountId: payload.id, token: accessToken });

          localStorage.setItem('@Survey:token', accessToken);
          localStorage.setItem('@Survey:accountId', payload.id);
        }
      });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Survey:token');
    localStorage.removeItem('@Survey:accountId');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged: !!data.token, signIn, signOut }}>
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
