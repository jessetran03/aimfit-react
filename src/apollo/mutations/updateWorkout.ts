import { gql } from '@apollo/client';

export const UpdateWorkoutMutation = gql`
  mutation ($id: ID!, $day: String!, $title: String!) {
    updateWorkout(id: $id, day: $day, title: $title)
  }
`;
