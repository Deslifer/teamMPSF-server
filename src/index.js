const {ApolloServer} = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const connectDb = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {models},
  playground: true,
});

server.listen({port: process.env.PORT || 3000}).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`);
});
