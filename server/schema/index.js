import { gql } from 'apollo-server-express';

const schema = gql `
 type User {
    id: ID!
    email: String!
    username: String!
    password: String!
    is_admin: Boolean!
    products: [Product!]!
 }

 type Product {
   id: ID!
   name: String!
   description: String!
   price: Float!
   owner: User!
 }

 type Order {
   id: ID!
   product: Product!
   user: User!
   createdAt: String!
   updatedAt: String!
 }

 type UserData {
   userId: ID!
   email: String!
   token: String!
 }

 input ProductInput {
    name: String!
    description: String!
    price: Float!
 }

 input UserInput {
    email: String!
    username: String!
    password: String!
 }

 type Query {
    products: [Product!]!
    orders: [Order!]!
 }

 type Mutation {
   addProduct(productData: ProductInput!): Product!
   addUser(userInput: UserInput!): User!
   addOrder(productId: ID!): Order!
   login(email: String!, password: String!): UserData!
 }
`
export default schema;