import { gql } from '@apollo/client';

export const AddWorkoutExerciseMutation = gql`
  mutation NewWorkoutExercise($input: AddWorkoutExerciseInput) {
    newWorkoutExercise(input: $input)
  }
`;
