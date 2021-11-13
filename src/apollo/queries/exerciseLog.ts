import { gql } from '@apollo/client';

export const ExerciseLogQuery = gql`
  query {
    exerciseLog {
      id
      setCount
      repCount
      weightCount
      dateLogged
      exercise {
        name
      }
    }
  }
`;