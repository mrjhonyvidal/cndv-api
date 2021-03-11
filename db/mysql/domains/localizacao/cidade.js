mysqlDb = require('../../mysql_connection');

async function selectCidades() {
    try{
        const conn      = await mysqlDb.connect();
        const [rows]    = await conn.query('SELECT cidade, uf FROM cidade where pais = "BRA";');
        return await rows;
    }catch(error){
        console.log(error);
    }
}

module.exports = { selectCidades };