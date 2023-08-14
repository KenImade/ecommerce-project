// index.js (or app.js)

const express = require('express');

require('dotenv').config();
const colors = require('colors');


const { ApolloServer } = require('apollo-server-express');
const { connectDB } = require('./config/db');
const productSchema = require('./schema/productSchema');
const orderSchema = require("./schema/orderSchema")
const productResolvers = require('./resolvers/productResolvers')
const orderResolvers = require('./resolvers/orderResolvers')

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB database
connectDB();

const server = new ApolloServer({
  typeDefs: [productSchema, orderSchema],
  resolvers: [productResolvers, orderResolvers],
});

// Start the Apollo Server first
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
}
  

startApolloServer()
    .then(() => {
        // Add a route to serve an HTML page
        app.get('/', (req, res) => {
            res.send(`
                <html>
                    <head>
                        <title>Backend for Dummy Ecommerce application</title>
                    </head>
                    <body>
                        <h1>Welcome to the backend for a dummy ecommerce application.</h1>
                        <p>This was created by Kenenth Imade</p>
                    </body>
                </html>
            `);
        });

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}/`);
            console.log(`GraphQL Endpoint: http://localhost:${PORT}/graphql`);
        });
    })
    .catch(error => {
        console.error('Error starting Apollo Server:', error);
});