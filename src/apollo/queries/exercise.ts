import { gql } from '@apollo/client';

export const ExerciseQuery = gql`
  query ($exerciseId: ID!) {
  exercise(id: $exerciseId) {
    name
  }
}
`;