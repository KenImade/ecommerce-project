const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const { ApolloServer } = require('apollo-server-express');
const path = require('path')

const { connectDB } = require(path.join(__dirname, 'config', 'db'));
const productSchema = require(path.join(__dirname, 'schema', 'productSchema'));
const orderSchema = require(path.join(__dirname, 'schema', 'orderSchema'))
const productResolvers = require(path.join(__dirname, 'resolvers', 'productResolvers'))
const orderResolvers = require(path.join(__dirname, 'resolvers', 'orderResolvers'))

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
            console.log(`Server running on ${PORT}/`);
            console.log(`GraphQL Endpoint: ${PORT}/graphql`);
        });
    })
    .catch(error => {
        console.error('Error starting Apollo Server:', error);
});