import { gql } from '@apollo/client';

export const CreateWorkoutMutation = gql`
  mutation ($day: String, $title: String) {
    newWorkout(day: $day, title: $title)
  }
`;
