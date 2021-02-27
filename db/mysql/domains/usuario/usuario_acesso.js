mysqlDb = require('../../mysql_connection');

async function checkUsuarioExiste(cpf) {
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
        process.exit(1);
    }
}

async function selectUsuarioAcesso() {
    try{
        const conn      = await mysqlDb.connect();
        const [rows]    = await conn.query('SELECT ' +
            'cpf, ' +
            'nome, ' +
            'email ' +
            'FROM carteira_vacina;');
        return await rows;
    }catch(error){
        console.log(error);
        process.exit(1);
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
        process.exit(1);
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
        process.exit(1);
    }
}

module.exports = {
    checkUsuarioExiste,
    selectUsuarioAcesso,
    updateUsuarioAcesso,
    insertUsuarioAcesso
};