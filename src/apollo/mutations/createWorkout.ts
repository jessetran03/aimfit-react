import { gql } from '@apollo/client';

export const CreateWorkoutMutation = gql`
  mutation NewWorkout($input: CreateWorkoutInput) {
    newWorkout(input: $input) {
      id
      userId
      day
      title
    }
  }
`;
