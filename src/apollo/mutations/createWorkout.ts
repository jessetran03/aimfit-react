import { gql } from '@apollo/client';

export const CreateWorkoutMutation = gql`
  mutation ($input: CreateWorkoutInput) {
    newWorkout(input: $input)
  }
`;
