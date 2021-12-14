import { gql } from '@apollo/client';

export const AddWorkoutExerciseMutation = gql`
  mutation ($workoutId: ID!, $exerciseId: ID!) {
    newWorkoutExercise(workoutId: $workoutId, exerciseId: $exerciseId)
  }
`;
