  
const path = require('path');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express')
const app = express();
const port = process.env.PORT || 3000;
const resolvers = require('./server/resolvers');
const typeDefs = require('./server/typeDefs');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({app, path: '/graphql'});

app.listen({port}, function () {
  console.log(`Your server, listening on port ${port}`);
});