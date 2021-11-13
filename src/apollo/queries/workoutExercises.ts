import { gql } from '@apollo/client';

export const WorkoutExercisesQuery = gql`
  query ($id: ID!) {
    workout(id: $id) {
      title
    }
    workoutExercises {
      id
      workout {
        id
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
