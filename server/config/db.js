// db.js

const mongoose = require('mongoose');
const Product = require('../models/productModel')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.DB_NAME
        });
      console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline.bold);
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      process.exit(1);
    }
  };
  
  module.exports = { connectDB, Product };