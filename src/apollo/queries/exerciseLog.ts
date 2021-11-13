import { gql } from '@apollo/client';

export const ExerciseLogQuery = gql`
  query ($exerciseId: ID!) {
    exercise(id: $exerciseId) {
      id
      name
    }
    exerciseLog(exerciseId: $exerciseId) {
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
