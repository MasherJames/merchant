import { gql } from "apollo-server-express";

const schema = gql`
  type Order {
    id: ID!
    customer: User @provides(fields: "username")
    product: Product!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    orders: [Order]
  }

  extend type Product @key(fields: "id") {
    id: ID @external
    name: String!
    description: String!
    price: Float!
  }

  extend type Query {
    login(email: String!, password: String!): UserData!
  }

  extend type Mutation {
    addUser(userInput: UserInput!): User!
  }
`;
export default schema;
