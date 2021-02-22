mysqlDb = require('../../mysql_connection');

async function selectHistoricoVacinacao() {
    try{
        const conn      = await mysqlDb.connect();
        const [rows]    = await conn.query('SELECT ' +
            'id, ' +
            'cpf, ' +
            'id_tipo_vacina ' +
            'dt_aplicacao' +
            'id_tipo_dose ' +
            'lote ' +
            'codigo ' +
            'nome_aplicador ' +
            'reg_profissional ' +
            'unidade_saude ' +
            'cidade ' +
            'uf ' +
            'obs ' +
            'FROM carteira_historico_vacinacao;');
        return await rows;
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function insertHistoricoVacinacao(historicoVacinacao) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO carteira_historico_vacinacao(' +
            'id_tipo_vacina, ' +
            'dt_aplicacao, ' +
            'id_tipo_dose, ' +
            'lote, ' +
            'codigo, ' +
            'nome_aplicador, ' +
            'reg_profissional, ' +
            'unidade_saude, ' +
            'cidade, ' +
            'uf, ' +
            'obs' +
            ') VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);';
        const values    = [
            historicoVacinacao.id_tipo_vacina,
            historicoVacinacao.dt_aplicacao,
            historicoVacinacao.id_tipo_dose,
            historicoVacinacao.lote,
            historicoVacinacao.codigo,
            historicoVacinacao.nome_aplicador,
            historicoVacinacao.reg_profissional,
            historicoVacinacao.unidade_saude,
            historicoVacinacao.cidade,
            historicoVacinacao.uf,
            historicoVacinacao.obs
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function updateHistoricoVacinacao(id, cpf, historicoVacinacao) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE carteira_historico_vacinacao ' +
            'SET id_tipo_vacina=?, ' +
            'dt_aplicacao=?, ' +
            'id_tipo_dose=?, ' +
            'lote=?, ' +
            'codigo=?, ' +
            'nome_aplicador=?, ' +
            'reg_profissional=?, ' +
            'unidade_saude=?, ' +
            'cidade=?, ' +
            'uf=?, ' +
            'obs=?' +
            ' WHERE id=?';
        const values = [
            historicoVacinacao.id_tipo_vacina,
            historicoVacinacao.dt_aplicacao,
            historicoVacinacao.id_tipo_dose,
            historicoVacinacao.lote,
            historicoVacinacao.codigo,
            historicoVacinacao.nome_aplicador,
            historicoVacinacao.reg_profissional,
            historicoVacinacao.unidade_saude,
            historicoVacinacao.cidade,
            historicoVacinacao.uf,
            historicoVacinacao.obs
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function deleteHistoricoVacinacao(id, cpf) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'DELETE FROM carteira_historico_vacinacao WHERE id=? AND cpf=?';
        return await conn.query(sql, [id], [cpf]);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    selectHistoricoVacinacao,
    insertHistoricoVacinacao,
    updateHistoricoVacinacao,
    deleteHistoricoVacinacao
};