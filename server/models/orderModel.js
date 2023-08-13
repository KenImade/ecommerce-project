const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  price: Number,
  quantity: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  address: String,
  zipCode: String,
  city: String,
  country: String,
  payment: String,
});

const orderSchema = new mongoose.Schema({
  user: userSchema,
  items: [itemSchema],
  total: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;