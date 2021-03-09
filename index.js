require('dotenv').config({path:'env/qa.env'});
require ('newrelic');

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./db/schema.graphql');
const resolvers = require('./db/resolvers.graphql');
const jwt = require('jsonwebtoken');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {

        const token = req.headers['authorization'] || '';
        if(token) {
            try{
                const usuario = jwt.verify(token.replace('Bearer ', ''), process.env.SECRET_JWT);
                return {
                    usuario
                }
            } catch (error) {
                console.log('No token found!');
                console.log(error);
            }
        }
    }
});
const PORT = process.env.PORT || 4000;

server.listen(PORT).then( ({url}) => {
    console.log(`Server running on port ${PORT}`)
});