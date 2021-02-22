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

// Anonymous Function executed automatically every time.
(async() => {
    const dosesDomain = require("./db/mysql/domains/dose/tipo_dose");
    console.log("started");
    console.log("SELECT TIPOS DE DOSES");

    const tipo_dose = await dosesDomain.selectTipoDose();
    console.log(tipo_dose);

    /*console.log('INSERT');
    const result = await dosesDomain.insertTipoDose({id: 6, descricao: 'TIPO OK', pais: 'BR', empresa: '07346574000165'});
    console.log(result);

    console.log('UPDATE');
    const result = await dosesDomain.updateTipoDose(6, {descricao: 'TIPO OK UPDATED', pais: 'BR', empresa: '07346574000165'});
    console.log(result);

    console.log('DELETE');
    const result = await dosesDomain.deleteTipoDose(8);
    console.log(result);*/
})();

server.listen().then( ({url}) => {
    console.log(`Server running in url ${url}`)
});