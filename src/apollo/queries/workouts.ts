import { gql } from '@apollo/client';

export const WorkoutsQuery = gql`
  query {
    workouts {
      id
      day
      title
    }
  }
`;