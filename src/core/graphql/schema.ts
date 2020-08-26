import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    state: String!
  }

  extend type Mutation {
    updateState(state: String!): String
  }
`;

export default typeDefs;
