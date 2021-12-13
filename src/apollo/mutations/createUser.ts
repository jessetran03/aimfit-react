import { gql } from '@apollo/client';

export const CreateUserMutation = gql`
  mutation ($input: CreateUserInput) {
    newUser(input: $input) {
      id
    }
  }
`;
