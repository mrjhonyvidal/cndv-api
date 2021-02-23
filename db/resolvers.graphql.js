require('dotenv').config({path:'env/dev.env'});
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
]; // TODO get tipo vacinas from DB
const UsuarioAcessoModel = require('../db/mysql/domains/usuario/usuario_acesso');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (user, secretTokenKey, expiresIn) => {
    const { cpf } = user;
    return jwt.sign({ cpf }, secretTokenKey, { expiresIn })
}

const resolvers = {
    Query: {
        getCarteiraTipoVacinas: () => carteira_tipo_vacinas,
        getCarteiraTipoVacina: (_, {input}, ctx, info ) => {
            console.log(ctx);
            const result = carteira_tipo_vacinas.filter(tipo => tipo.descricao === input.descricao);
            return result;
        },
        obtainUsuario: async (_, { token }) => {
            const usuarioCPF = await jwt.verify(token, process.env.SECRET_JWT);
            return usuarioCPF;
        }
    },
    Mutation: {
        novoUsuarioAcesso: async (_, { input }) => {
            // TODO apply SPR in this function

            // Verificar se o usuário está cadastrado
            const { cpf, email, senha} = input;
            const isNewUsuario = await UsuarioAcessoModel.checkUsuarioExiste(cpf);
            if(isNewUsuario.length > 0) {
                throw new Error('Não foi possível realizar o cadastro, por favor entre em contato com o administrador do sistema.')
            }

           // Encriptar senha
            const salt = await bcryptjs.genSalt(10);
            input.senha = await bcryptjs.hash(senha, salt);

           // Guardar en el DB
            try{
                const result = await UsuarioAcessoModel.insertUsuarioAcesso(input);
                return result[0].rowsAffected;
            }catch (error) {
                console.log(error);
            }
        },
        autenticarUsuario: async (_, { input }) => {
            const { cpf, senha } = input;

            const existeUsuario = await UsuarioAcessoModel.checkUsuarioExiste(cpf);
            if (!existeUsuario[0]) {
                throw new Error('Não possível realizar a autenticação do usuário, por favor entre em contato com o administrador');
            }

            const isPasswordCorrect = await bcryptjs.compare(senha, existeUsuario[0].senha);
            if (!isPasswordCorrect) {
                throw new Error('Não possível realizar a autenticação do usuário');
            }

            // Generate JWT token
            return {
                token: createToken(existeUsuario[0], process.env.SECRET_JWT, '24h')
            }
        }
    }

}

module.exports = resolvers;