import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { GRAPHQL_URI } from "../config";

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;

client
  .query({
    query: gql`
      query GetWorkouts {
        exercises {
          id
          name
          muscle
        }
      }
    `,
  })
  .then((result) => console.log({ result }));

export const workoutsQuery = gql`
  query GetWorkouts {
    workouts {
      id
      day
      title
    }
  }
`;

export const exercisesQuery = gql`
  query GetWorkouts {
    exercises {
      id
      name
      muscle
    }
  }
`;
