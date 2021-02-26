const { ApolloServer } = require('apollo-server');
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
const PORT = process.env.PORT || 4000;

server.listen(PORT).then( ({url}) => {
    console.log(`Server running on port ${PORT}`)
});