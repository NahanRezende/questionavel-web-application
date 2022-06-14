import React from 'react';
import Routes from './routes';
import Global from './styles/global';

import { AuthProvider } from './hooks/auth';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global />
    </>
  );
};
