import gql from 'graphql-tag';

export const UPDATE_STATE = gql`
  mutation updateState($state: String!) {
    updateState(state: $state) @client
  }
`;
