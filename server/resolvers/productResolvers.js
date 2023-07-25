// resolvers.js

const Product = require('../models/productModel');

const productResolvers = {
  Query: {
    getProductById: async (_, { id }) => {
      return await Product.findById(id);
    },
    getAllProducts: async () => {
      return await Product.find();
    },
  },
  Mutation: {
    createProduct: async (_, {args}) => {
        return await Product.create(args);
    },
    updateProduct: async (_, { id, ...updateData }) => {
        return await Product.findByIdAndUpdate(id, updateData, { new: true });
    },
    deleteProduct: async (_, { id }) => {
        await Product.findByIdAndDelete(id);
        return true;
    },
  }
};

module.exports = productResolvers;