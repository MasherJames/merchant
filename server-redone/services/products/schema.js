import { gql } from "apollo-server-express";

const schema = gql`
  type Product @key(fields: "id") {
    id: ID!
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
    owner: User @provides(fields: "id")
  }

  extend type User @key(fields: "id") {
    id: Int! @external
    products: [Product!]
  }

  input ProductInput {
    name: String!
    description: String!
    price: Float!
    quantity: Int!
    image: String!
  }

  extend type Query {
    products: [Product!]!
    product(id: Int!): Product!
  }

  extend type Mutation {
    addProduct(productData: ProductInput!): Product!
    updateProduct(id: Int!, productUpdateData: ProductInput!): Product!
    deleteProduct(id: Int!): Boolean!
  }
`;
export default schema;
