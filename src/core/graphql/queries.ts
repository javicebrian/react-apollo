import gql from 'graphql-tag';

export const GET_STATE_VALUE = gql`
query GetState {
    state @client
  }
`;


