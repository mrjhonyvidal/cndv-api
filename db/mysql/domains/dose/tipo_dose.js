mysqlDb = require('../../mysql_connection');

async function selectTipoDose() {
    const conn      = await mysqlDb.connect();
    const [rows]    = await conn.query('SELECT id, descricao, pais, empresa FROM carteira_tipo_dose;');
    return await rows;
}

async function insertTipoDose(tipoDose) {
    const conn      = await mysqlDb.connect();
    const sql       = 'INSERT INTO carteira_tipo_dose(descricao, pais, empresa) VALUES (?,?,?);';
    const values    = [tipoDose.descricao, tipoDose.pais, tipoDose.empresa];
    return await conn.query(sql, values);
}

async function updateTipoDose(id, tipoDose) {
    const conn      = await mysqlDb.connect();
    const sql       = 'UPDATE carteira_tipo_dose SET descricao=?, pais=?, empresa=? WHERE id=?';
    const values    = [tipoDose.descricao, tipoDose.pais, tipoDose.empresa, id];
    return await conn.query(sql, values);
}

async function deleteTipoDose(id) {
    const conn = await mysqlDb.connect();
    const sql = 'DELETE FROM carteira_tipo_dose WHERE id=?';
    return await conn.query(sql, [id]);
}

module.exports = { selectTipoDose, insertTipoDose, updateTipoDose, deleteTipoDose };