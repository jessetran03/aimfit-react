import { gql } from '@apollo/client';

export const WorkoutExercisesQuery = gql`
  query {
    workoutExercises {
      id
      workoutId
      exercise {
        id
        name
        muscle
      }
    }
  }
`;
