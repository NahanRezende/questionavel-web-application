import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes';
import Global from './styles/global';

import { AuthProvider } from './hooks/auth';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global />
    </QueryClientProvider>
  );
};
