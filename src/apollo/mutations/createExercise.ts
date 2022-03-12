import { gql } from '@apollo/client';

export const CreateExerciseMutation = gql`
  mutation ($name: String, $muscle: String) {
    newExercise(name: $name, muscle: $muscle) {
      id
    }
  }
`;
