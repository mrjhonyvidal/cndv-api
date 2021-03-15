require('dotenv').config({path:'env/qa.env'});

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema.graphql');
const resolvers = require('./graphql/resolvers.graphql');
const jwt = require('jsonwebtoken');
const firebaseSDK = require('./services/firebase/oauth2_access_token');

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

// Temporary - check Firebase Cloud Messaging via REST HTTP v1 using OAuth2
/**const firebaseOAuth2Token = firebaseSDK.getAccessToken().then(function(result){
    console.log(result)
});**/

const PORT = process.env.PORT || 4000;

server.listen(PORT).then( ({url}) => {
    console.log(`Server running on port ${PORT}`)
});
