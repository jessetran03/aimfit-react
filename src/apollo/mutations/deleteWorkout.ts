import { gql } from '@apollo/client';

export const DeleteWorkoutMutation = gql`
  mutation ($id: ID!) {
    deleteWorkout(id: $id)
  }
`;
