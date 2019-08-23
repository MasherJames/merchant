import { gql } from "apollo-server-express";

const schema = gql`
  type User @key(fields: "id") {
    id: ID!
    email: String!
    username: String!
    password: String!
    is_admin: Boolean!
  }

  type UserData {
    userId: ID!
    email: String!
    token: String!
  }
  input UserInput {
    email: String!
    username: String!
    password: String!
  }

  extend type Mutation {
    addUser(userInput: UserInput!): User!
    login(email: String!, password: String!): UserData!
  }
`;
export default schema;
