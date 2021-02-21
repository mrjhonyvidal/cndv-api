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

const resolvers = {
    Query: {
        getCarteiraTipoVacinas: () => carteira_tipo_vacinas
    }
}

module.exports = resolvers;