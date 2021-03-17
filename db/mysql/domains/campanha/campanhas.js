mysqlDb = require('../../mysql_connection');

async function selectCampanhas() {
    try{
        const conn      = await mysqlDb.connect();
        const [rows]    = await conn.query('SELECT id, nome, idade_inicio, idade_final, cidade, uf, descricao FROM campanhas;');
        return await rows;
    }catch(error){
        console.log(error);
    }
}

async function selectCampanhaById(id) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'campanhas.id, ' +
            'campanhas.nome, ' +
            'campanhas.idade_inicio, ' +
            'campanhas.idade_final, ' +
            'campanhas.cidade, ' +
            'campanhas.uf, ' +
            'campanhas.descricao ' +
            'FROM campanhas ' +
            'WHERE campanhas.id=?';

        const values = [
            id
        ];
        const [rows] = await conn.query(sql, values);
        return await rows;
    }catch(error){
        console.log(error);
    }
}

async function insertCampanha(campanha) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO campanhas(nome, idade_inicio, idade_final, cidade, uf) VALUES (?,?,?,?,?);';
        const values    = [
            campanha.nome,
            campanha.idade_inicio,
            campanha.idade_final,
            campanha.cidade,
            campanha.uf,
            campanha.descricao
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

async function updateCampanha(id, campanha) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE campanhas ' +
            'SET nome=?, ' +
            'idade_inicio=?, ' +
            'idade_final=?, ' +
            'cidade=?, ' +
            'uf=?, ' +
            'descricao=? ' +
            'WHERE id=?';

        const values = [
            campanha.nome,
            campanha.idade_inicio,
            campanha.idade_final,
            campanha.cidade,
            campanha.uf,
            campanha.descricao,
            id
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

async function deleteCampanha(id) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'DELETE FROM campanhas WHERE id=?';
        return await conn.query(sql, [id]);
    }catch(error){
        console.log(error);
    }
}

module.exports = { selectCampanhas, selectCampanhaById, insertCampanha, updateCampanha, deleteCampanha };