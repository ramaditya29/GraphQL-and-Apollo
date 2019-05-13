const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose').set('debug', true);
const models = require('./models');

const mongoURI = "mongodb://localhost:27017/users";
mongoose.connect(mongoURI,  {useNewUrlParser: true});
mongoose.connection
    .once('open', () => {console.log('Connected to Mongodb')})
    .on('error', error => console.log('Error connecting to MongoLab:', error));

let typeDefs = require('./src/typedefs');
let resolvers = require('./src/resolvers')


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});