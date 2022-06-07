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
import { WebSocketLink } from '@apollo/client/link/ws';
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

const wsLink = new WebSocketLink({
  uri:
    process.env.REACT_APP_API_URL === 'dev'
      ? 'ws://localhost:5000/graphql'
      : process.env.REACT_APP_API_URL === 'hom'
      ? 'wss://graphql-hom.precato.com.br/graphql'
      : 'wss://graphql.precato.com.br/graphql',
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
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
