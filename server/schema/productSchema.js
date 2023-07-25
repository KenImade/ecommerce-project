// productSchema.js

const { gql } = require('apollo-server-express');

const productSchema = gql`
  type Image {
    desktop: String
    tablet: String
    mobile: String
  }

  type Accessory {
    name: String
    quantity: Int
  }

  type Gallery {
    desktop: [String]
    tablet: [String]
    mobile: [String]
  }

  type Preview {
    desktop: String
    tablet: String
    mobile: String
  }

  type Product {
    id: Int
    title: String
    tag: String
    category: String
    isNew: Boolean
    preview: Preview
    productImage: Image
    info: String
    price: Int
    quantity: Int
    features: String
    accessories: [Accessory]
    gallery: Gallery
    cartImage: String
  }

  type Query {
    getProductById(id: Int!): Product
    getAllProducts: [Product]
  }

  type Mutation {
    createProduct(
      title: String!
      tag: String!
      category: String!
      # ... other required fields
    ): Product
  
    updateProduct(
      id: Int!
      title: String
      tag: String
      category: String
      # ... other fields you want to update
    ): Product
  
    deleteProduct(id: Int!): Boolean
  }
`;

module.exports = productSchema;
