// index.js (or app.js)

const express = require('express');

require('dotenv').config();
const colors = require('colors');


const { ApolloServer } = require('apollo-server-express');
const { connectDB, Product } = require('./config/db');
const productSchema = require('./schema/productSchema');
const productResolvers = require('./resolvers/productResolvers')

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB database
connectDB();

const server = new ApolloServer({
  typeDefs: productSchema,
  resolvers: productResolvers,
});

// Start the Apollo Server first
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
}
  
startApolloServer().then(() => {
    // Start the Express server
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}/graphql`);
    });
});