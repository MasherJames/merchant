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
   quantity: Int!
   image: String!
   owner: User!
 }

 type Order {
   id: ID!
   product: Product!
   user: User!
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
    quantity: Int!
    image: String!
 }

 input UserInput {
    email: String!
    username: String!
    password: String!
 }

 type Query {
    products: [Product!]!
    product(id: Int!):Product!
    orders: [Order!]!
    order(id: Int!): Order!
 }

 type Mutation {
   addProduct(productData: ProductInput!): Product!
   addUser(userInput: UserInput!): User!
   addOrder(productId: ID!): Order!
   login(email: String!, password: String!): UserData!
   updateProduct(id: Int!, productUpdateData: ProductInput!): Product!
   updateOrder(id: Int!): Order!
   deleteProduct(id: Int!): Boolean!
   deleteOrder(id: Int!): Boolean!
   cancelOrder(id: Int!): Boolean!
 }
`
export default schema;