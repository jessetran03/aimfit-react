import { gql } from '@apollo/client';

export const WorkoutExercisesQuery = gql`
  query WorkoutExercises {
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
