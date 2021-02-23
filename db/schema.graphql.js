const { gql } = require('apollo-server');

const typeDefs = gql`
    type CarteiraTipoVacinas{
        descricao: String
        pais: String
    }
    
    type UsuarioAcesso {
        cpf: String        
        nome: String                
        email: String
    }
    
    input CarteiraTipoVacinasInput {
        descricao: String
    }
    
    input UsuarioInput {
        cpf: String!
        nome: String!
        senha: String!
        email: String!
    }
    
    type Query {
        getCarteiraTipoVacinas : [CarteiraTipoVacinas]
        getCarteiraTipoVacina(input: CarteiraTipoVacinasInput!) : [CarteiraTipoVacinas]
    }
         
    type Mutation {
        novoUsuarioAcesso(input: UsuarioInput): UsuarioAcesso
    }
`;

module.exports = typeDefs;