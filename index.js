const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers.graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        const myContext = "Vacina sim";
        return {
            myContext
        }
    }
});

server.listen().then( ({url}) => {
    console.log(`Server running in url ${url}`)
});