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
    
    type Token {
        token: String
    }
    
    type TipoVacina {
        id: ID
        descricao: String
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
    
    input AutenticarInput {
        cpf: String!
        senha: String!
    }
    
    input TipoVacinaInput {
        descricao: String!
    }
    
    type Query {
        getCarteiraTipoVacinas : [CarteiraTipoVacinas]
        getCarteiraTipoVacina(input: CarteiraTipoVacinasInput!) : [CarteiraTipoVacinas]
        
        # Usuario Acesso
        obtainUsuario(token: String!): UsuarioAcesso
    }
         
    type Mutation {
        # Usuario Acesso
        novoUsuarioAcesso(input: UsuarioInput): UsuarioAcesso
        autenticarUsuario(input: AutenticarInput): Token
        
        # Tipo Vacina
        novoTipoVacina(input: TipoVacinaInput): TipoVacina
    }
`;

module.exports = typeDefs;