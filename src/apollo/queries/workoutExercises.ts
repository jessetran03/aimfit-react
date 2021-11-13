import { gql } from '@apollo/client';

export const WorkoutExercisesQuery = gql`
  query {
    workoutExercises {
      id
      workout {
        title
        day
      }
      exercise {
        id
        name
        muscle
      }
    }
  }
`;
