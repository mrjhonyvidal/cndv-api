mysqlDb = require('../../mysql_connection');

async function checkUsuarioExiste(cpf, email) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'senha, ' +
            'nome, ' +
            'email ' +
            'FROM carteira_vacina WHERE cpf=? OR email=?;';

        const values = [
            cpf,
            email
        ];
        const [rows] = await conn.query(sql, values);
        return await rows;
    }catch(error){
        console.log(error);
    }
}

async function checkUsuarioExisteWithCPF(cpf) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'senha, ' +
            'nome, ' +
            'email ' +
            'FROM carteira_vacina WHERE cpf=?;';

        const values = [
            cpf
        ];

        const [rows] = await conn.query(sql, values);
        return await rows;

    }catch(error){
        console.log(error);
    }
}

async function selectUsuarioAcesso(cpf) {
    try{
        const conn      = await mysqlDb.connect();
        const  sql       = 'SELECT ' +
            'cpf, ' +
            'nome, ' +
            'email ' +
            'FROM carteira_vacina WHERE cpf=?;';

        const values = [
            cpf
        ];
        const [rows] = await conn.query(sql, values);
        return await rows;

    }catch(error){
        console.log(error);
    }
}

async function insertUsuarioAcesso(usuarioAcesso) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO carteira_vacina(' +
            'cpf, ' +
            'rg, ' +
            'senha, ' +
            'nome, ' +
            'dt_nascimento, ' +
            'email, ' +
            'contato, ' +
            'id_tipo_sanguineo, ' +
            'doador, ' +
            'endereco, ' +
            'numero, ' +
            'complemento, ' +
            'bairro, ' +
            'cidade, ' +
            'uf, ' +
            'pais, ' +
            'cep, ' +
            'obs,' +
            'empresa' +
            ') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        const values    = [
            usuarioAcesso.cpf,
            '',
            usuarioAcesso.senha,
            usuarioAcesso.nome,
            new Date(1990,6,6),
            usuarioAcesso.email,
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '07346574000165'
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

async function updateUsuarioAcesso(cpf, usuarioAcesso) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE carteira_vacina ' +
            'SET nome=?, ' +
            'senha=?, ' +
            'email=?' +
            ' WHERE cpf=?';
        const values = [
            usuarioAcesso.nome,
            usuarioAcesso.senha,
            usuarioAcesso.email,
            cpf
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    checkUsuarioExiste,
    checkUsuarioExisteWithCPF,
    selectUsuarioAcesso,
    updateUsuarioAcesso,
    insertUsuarioAcesso
};