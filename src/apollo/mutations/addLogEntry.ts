import { gql } from '@apollo/client';

export const AddLogEntryMutation = gql`
  mutation ($input: AddLogEntry) {
    newLogEntry(input: $input)
  }
`;
