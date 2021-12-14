import { gql } from '@apollo/client';

export const AddLogEntryMutation = gql`
  mutation (
    $exerciseId: ID!
    $setCount: Float
    $repCount: Float
    $weightCount: Float
  ) {
    newLogEntry(
      exerciseId: $exerciseId
      setCount: $setCount
      repCount: $repCount
      weightCount: $weightCount
    )
  }
`;
