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
    
    type UsuarioToken {
        token: String
        email: String
        cpf: String!
        nome: String
    }
    
    scalar Date
    
    type HistoricoVacinacao {
        id: ID
        cpf: String        
        tipo_vacina_descricao: String
        dt_aplicacao: Date        
        tipo_dose_descricao: String                
        tipo_dose: String
        lote: String
        codigo: String
        nome_aplicador: String
        reg_profissional: String
        unidade_saude: String
    }
    
    type Campanha {        
        id: ID
        nome: String
        idade_inicio: Int
        idade_final: Int
        municipio: String
        uf: String                
    }       
    
    type TipoVacina {
        id: ID
        descricao: String
    }
    
    input CampanhaInput{
        id: ID
        nome: String
        idade_inicio: Int
        idade_final: Int
        municipio: String
        uf: String
    } 
    
    ##input DetalheHistoricoVacinacaoInput{
    ##   id: ID
    ##   cpf: String
    ##}          
       
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
        id: Int
        descricao: String!
    }
    
    type Query {
        getCarteiraTipoVacinas : [CarteiraTipoVacinas]
        getCarteiraTipoVacina(input: CarteiraTipoVacinasInput!) : [CarteiraTipoVacinas]
        
        # Usuario Acesso
        obtenerUsuario(token: String!): UsuarioAcesso
        
        # Historico Vacinacao
        obtenerHistoricoVacinacao(cpf: String!): [HistoricoVacinacao]
        ##obtenerDetalheHistoricoVacinacao(input: DetalheHistoricoVacinacaoInput!): HistoricoVacinacao
        
        # Dados Pessoais Cidadao
               
        # Campanhas
        obtenerCampanhas: [Campanha]
        obtenerCampanhasPorIdade(input: CampanhaInput!): [Campanha]
    }
         
    type Mutation {
        # Usuario Acesso
        novoUsuarioAcesso(input: UsuarioInput): UsuarioAcesso
        autenticarUsuario(input: AutenticarInput): UsuarioToken
        
        # Historico Vacinacao
        
        # Dados Pessoais Cidadao
               
        # Campanhas
        
        # Tipo Vacina
        novoTipoVacina(input: TipoVacinaInput): TipoVacina        
        
        # Tipo Sanguineo
        
        
        # Tipo Dose                                                                                 
    }
`;

module.exports = typeDefs;