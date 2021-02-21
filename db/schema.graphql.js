const { gql } = require('apollo-server');

const typeDefs = gql`
    type CarteiraTipoVacinas{
        descricao: String
        pais: String
    }
    
    input CarteiraTipoVacinasInput {
        descricao: String
    }
    
    type Query {
        getCarteiraTipoVacinas : [CarteiraTipoVacinas]
        getCarteiraTipoVacina(input: CarteiraTipoVacinasInput!) : [CarteiraTipoVacinas]
    }
`;

module.exports = typeDefs;