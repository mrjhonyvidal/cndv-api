const { gql } = require('apollo-server');

const typeDefs = gql`

    scalar Date

    type CarteiraTipoVacinas{
        descricao: String
        pais: String
    }
    
    type DadosPessoais {        
        cpf: String
        rg: String
        nome: String
        dt_nascimento: Date
        email: String
        contato: String
        id_tipo_sanguineo: String
        doador: String
        endereco: String
        numero: String
        complemento: String
        bairro: String
        cidade: String
        uf: String
        pais: String
        cep: String
        obs: String                
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
        cidade: String
        uf: String
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
    
    input DadosPessoaisInput {
        rg: String
        senha: String
        nome: String
        email: String
        contato: String
        id_tipo_sanguineo: String
        doador: String
        endereco: String
        numero: String
        complemento: String
        bairro: String
        cidade: String
        uf: String
        pais: String
        cep: String
    }
    
    input HistoricoVacinacaoInput{
        id_tipo_vacina: String
        dt_aplicacao: String
        id_tipo_dose: String
        lote: String
        codigo: String
        nome_aplicador: String
        reg_profissional: String
        unidade_saude: String
        cidade: String
        uf: String
    }
    
    input CampanhaInput{
        id: ID
        nome: String
        idade_inicio: Int
        idade_final: Int
        municipio: String
        uf: String
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
        id: Int
        descricao: String!
    }
    
    type Query {
        getCarteiraTipoVacinas : [CarteiraTipoVacinas]
        getCarteiraTipoVacina(input: CarteiraTipoVacinasInput!) : [CarteiraTipoVacinas]
        
        # Usuario Acesso
        obtenerUsuario(token: String!): UsuarioAcesso
        
        # Cidadoes
        obtenerCidadoes: [DadosPessoais]
        
        # Historico Vacinacao
        obtenerHistoricoVacinacao(cpf: String!): [HistoricoVacinacao]
        
        # Dados Pessoais Cidadao
        obtenerDadosPessoais(cpf: String!): DadosPessoais
               
        # Campanhas
        obtenerCampanhas: [Campanha]
        obtenerCampanhasPorIdade(input: CampanhaInput!): [Campanha]
    }
         
    type Mutation {
        # Usuario Acesso
        novoUsuarioAcesso(input: UsuarioInput): UsuarioAcesso
        autenticarUsuario(input: AutenticarInput): UsuarioToken
        
        # Historico Vacinacao
        novoHistoricoVacinacao(input: HistoricoVacinacaoInput): HistoricoVacinacao
        atualizarHistoricoVacinacao(id: ID!, cpf: String!, input: HistoricoVacinacaoInput): HistoricoVacinacao
        eliminarHistoricoVacinacao(id: ID!, cpf: String!): String
        
        # Dados Pessoais Cidadao
        atualizarDadosPessoais(id: ID!, input: DadosPessoaisInput): DadosPessoais
               
        # Campanhas
        novaCampanha(input: CampanhaInput): Campanha
        atualizarCampanha(id: ID!, input: CampanhaInput): Campanha
        eliminarCampanha(id: ID!): String
        
        # Tipo Vacina
        novoTipoVacina(input: TipoVacinaInput): TipoVacina        
        
        # Tipo Sanguineo                
        # Tipo Dose
        # PostosDeAtendimento                                                                                 
        # Agendamentos
    }
`;

module.exports = typeDefs;