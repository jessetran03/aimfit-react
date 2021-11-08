import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_URI } from '../config';

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;
