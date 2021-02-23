// TODO obtain info from database
const carteira_tipo_vacinas = [
    {
        descricao: 'BCG ID',
        pais: 'BRA'
    },
    {
        descricao: 'Hepatite B',
        pais: 'BRA'
    },
    {
        descricao: 'Rotavírus',
        pais: 'BRA'
    },
    {
        descricao: 'Tríplice Bacteriana  (DTPw, DTPa ou dTPa)',
        pais: 'BRA'
    },
    {
        descricao: 'Haemoplilus influenze tipo B',
        pais: 'BRA'
    },
    {
        descricao: 'Poliomielite (vírus inativos)',
        pais: 'BRA'
    },
    {
        descricao: 'Pneumocócica conjugada',
        pais: 'BRA'
    },
    {
        descricao: 'Meningocócica conjugada  C ou  ACWY',
        pais: 'BRA'
    },
    {
        descricao: 'Meningocócica B',
        pais: 'BRA'
    },
    {
        descricao: 'Poliomelite oral (vírus vivos atenuados)',
        pais: 'BRA'
    },
    {
        descricao: 'Influenza (gripe)',
        pais: 'BRA'
    },
    {
        descricao: 'Febre amarela',
        pais: 'BRA'
    },
    {
        descricao: 'Tríplice viral (sarampo, caxumba e rubéola)',
        pais: 'BRA'
    },
    {
        descricao: 'Varicela (catapora)',
        pais: 'BRA'
    },
    {
        descricao: 'Hepatite A ',
        pais: 'BRA'
    },
    {
        descricao: 'HPV',
        pais: 'BRA'
    },
    {
        descricao: 'Pneumocócica 23 valente',
        pais: 'BRA'
    },
    {
        descricao: 'Herpes zóster',
        pais: 'BRA'
    },
    {
        descricao: 'Dengue',
        pais: 'BRA'
    }
];
const UsuarioAcessoModel = require('../db/mysql/domains/usuario/usuario_acesso');

const resolvers = {
    Query: {
        getCarteiraTipoVacinas: () => carteira_tipo_vacinas,
        getCarteiraTipoVacina: (_, {input}, ctx, info ) => {
            console.log(ctx);
            const result = carteira_tipo_vacinas.filter(tipo => tipo.descricao === input.descricao);
            return result;
        }
    },
    Mutation: {
        novoUsuarioAcesso: async (_, { input }) => {
            // TODO verificar se o usuário está cadastrado
            const { cpf, email} = input;
            const isNewUsuario = await UsuarioAcessoModel.checkUsuarioExiste(cpf, email);
            if(isNewUsuario.length > 0) {
                throw new Error('Não foi possível realizar o cadastro, por favor entre em contato com o administrador do sistema.')
            }

           // Hashear senha

           // Guardar na base
            try{
                const result = await UsuarioAcessoModel.insertUsuarioAcesso(input);
                return result[0].rowsAffected;
            }catch (error) {
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;