const { gql } = require('apollo-server');

const typeDefs = gql`
    type CarteiraTipoVacinas{
        descricao: String
        pais: String
    }
    type Query {
        getCarteiraTipoVacinas: [CarteiraTipoVacinas]
    }
`;

module.exports = typeDefs;