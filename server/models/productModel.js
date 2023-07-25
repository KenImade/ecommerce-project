// productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  tag: String,
  category: String,
  isNew: Boolean,
  preview: {
    desktop: String,
    tablet: String,
    mobile: String,
  },
  productImage: {
    desktop: String,
    tablet: String,
    mobile: String,
  },
  info: String,
  price: Number,
  quantity: Number,
  features: String,
  accessories: [
    {
      name: String,
      quantity: Number,
    },
  ],
  gallery: {
    desktop: [String],
    tablet: [String],
    mobile: [String],
  },
  cartImage: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;