import { gql } from '@apollo/client';

export const CreateUserMutation = gql`
  mutation (
    $username: String
    $firstName: String
    $lastName: String
    $password: String
  ) {
    newUser(
      username: $username
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      id
    }
  }
`;
