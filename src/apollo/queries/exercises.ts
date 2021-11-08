import { gql } from '@apollo/client';

export const ExercisesQuery = gql`
  query {
    exercises {
      id
      name
      muscle
    }
  }
`;