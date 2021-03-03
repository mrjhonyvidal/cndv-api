mysqlDb = require('../../mysql_connection');

async function selectCampanhas() {
    try{
        const conn      = await mysqlDb.connect();
        const [rows]    = await conn.query('SELECT id, nome, idade_inicio, idade_final FROM campanhas;');
        return await rows;
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function insertCampanha(campanha) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO campanhas(nome, idade_inicio, idade_final) VALUES (?,?,?);';
        const values    = [campanha.nome];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function updateCampanha(id, campanha) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE campanhas SET nome=? WHERE id=?';
        const values = [campanha.nome, id];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

async function deleteCampanha(id) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'DELETE FROM campanhas WHERE id=?';
        return await conn.query(sql, [id]);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = { selectCampanhas, insertCampanha, updateCampanha, deleteCampanha };