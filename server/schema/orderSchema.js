const { gql } = require('apollo-server-express');

const orderSchema = gql`
  type Item {
    title: String!
    price: Float!
    quantity: Int!
  }

  type User {
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
    zipCode: String!
    city: String!
    country: String!
    payment: String!
  }

  input UserInput {
    name: String!
    email: String!
    phoneNumber: String!
    address: String!
    zipCode: String!
    city: String!
    country: String!
    payment: String!
  }

  input ItemInput {
    title: String!
    price: Float!
    quantity: Int!
  }

  type Order {
    id: ID!
    user: User!
    items: [Item!]!
    total: Float!
  }

  type Mutation {
    addOrder(user: UserInput!, items: [ItemInput!]!, total: Float!): Order!
  }
`;

module.exports = orderSchema;