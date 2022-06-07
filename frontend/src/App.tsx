import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import Routes from './routes';
import Global from './styles/global';

import { AuthProvider } from './hooks/auth';

const queryClient = new QueryClient();

const httpLink = new HttpLink({
  uri:
    process.env.REACT_APP_API_URL === 'dev'
      ? 'http://localhost:5000/graphql'
      : process.env.REACT_APP_API_URL === 'hom'
      ? 'https://graphql-hom.precato.com.br/graphql'
      : 'https://graphql.precato.com.br/graphql',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },

  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <Global />
      </QueryClientProvider>
    </ApolloProvider>
  );
};
