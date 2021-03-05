mysqlDb = require('../../mysql_connection');

async function selectDadosPessoaisCidadao(cpf) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'rg, ' +
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
            'obs ' +
            'FROM carteira_vacina WHERE cpf=?';

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

async function selectTodosCidadoes() {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'rg, ' +
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
            'obs ' +
            'FROM carteira_vacina';

        const values = [];
        const [rows] = await conn.query(sql, values);
        return await rows;

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function insertDadosPessoaisCidadao(dadosPessoaisCidadao) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO carteira_vacina(' +
            'cpf, ' +
            'rg, ' +
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
            'obs' +
            ') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        const values    = [
            dadosPessoaisCidadao.cpf,
            dadosPessoaisCidadao.rg,
            dadosPessoaisCidadao.nome,
            dadosPessoaisCidadao.dt_nascimento,
            dadosPessoaisCidadao.email,
            dadosPessoaisCidadao.contato,
            dadosPessoaisCidadao.id_tipo_sanguineo,
            dadosPessoaisCidadao.doador,
            dadosPessoaisCidadao.endereco,
            dadosPessoaisCidadao.numero,
            dadosPessoaisCidadao.complemento,
            dadosPessoaisCidadao.bairro,
            dadosPessoaisCidadao.cidade,
            dadosPessoaisCidadao.uf,
            dadosPessoaisCidadao.pais,
            dadosPessoaisCidadao.cep,
            dadosPessoaisCidadao.obs
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function updateDadosPessoaisCidadao(cpf, dadosPessoaisCidadao) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE carteira_vacina ' +
            'SET rg=?, ' +
            'nome=?, ' +
            'dt_nascimento=?, ' +
            'email=?, ' +
            'contato=?, ' +
            'id_tipo_sanguineo=?, ' +
            'doador=?, ' +
            'endereco=?, ' +
            'numero=?, ' +
            'complemento=?, ' +
            'bairro=?, ' +
            'cidade=?, ' +
            'uf=?, ' +
            'pais=?, ' +
            'cep=?, ' +
            'obs=?' +
            ' WHERE cpf=?';
        const values = [
            dadosPessoaisCidadao.rg,
            dadosPessoaisCidadao.nome,
            dadosPessoaisCidadao.dt_nascimento,
            dadosPessoaisCidadao.email,
            dadosPessoaisCidadao.contato,
            dadosPessoaisCidadao.id_tipo_sanguineo,
            dadosPessoaisCidadao.doador,
            dadosPessoaisCidadao.endereco,
            dadosPessoaisCidadao.numero,
            dadosPessoaisCidadao.complemento,
            dadosPessoaisCidadao.bairro,
            dadosPessoaisCidadao.cidade,
            dadosPessoaisCidadao.uf,
            dadosPessoaisCidadao.pais,
            dadosPessoaisCidadao.cep,
            dadosPessoaisCidadao.obs,
            cpf
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function deleteDadosPessoaisCidadao(cpf) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'DELETE FROM carteira_vacina WHERE cpf=?';
        return await conn.query(sql, [cpf]);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    selectDadosPessoaisCidadao,
    selectTodosCidadoes,
    insertDadosPessoaisCidadao,
    updateDadosPessoaisCidadao,
    deleteDadosPessoaisCidadao
};