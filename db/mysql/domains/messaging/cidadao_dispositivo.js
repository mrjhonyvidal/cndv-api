mysqlDb = require('../../mysql_connection');

async function selectCidadaoDispositivo(cpf, token) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'dispositivo_token, ' +
            'tipo ' +
            'FROM cidadao_dispositivos WHERE cpf=? AND token=?';

        const values = [
            cpf,
            token
        ];
        const [rows] = await conn.query(sql, values);
        return await rows;

    }catch(error){
        console.log(error);
    }
}

async function selectCidadaoDispositivos() {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'SELECT ' +
            'cpf, ' +
            'dispositivo_token, ' +
            'tipo ' +
            'FROM cidadao_dispositivos';

        const [rows] = await conn.query(sql);
        return await rows;

    }catch(error){
        console.log(error);
    }
}

async function insertCidadaoDispositivo(cidadaoDispositivo) {
    try{
        const conn      = await mysqlDb.connect();
        const sql       = 'INSERT INTO cidadao_dispositivos(' +
            'cpf, ' +
            'dispositivo_token, ' +
            'tipo' +
            ') VALUES (?,?,?);';
        const values    = [
            cidadaoDispositivo.cpf,
            cidadaoDispositivo.token,
            cidadaoDispositivo.tipo
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

async function updateCidadaoDispositivo(cpf, token) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'UPDATE carteira_vacina ' +
            'SET dispositivo_token=?' +
            ' WHERE cpf=?';
        const values = [
            token,
            cpf
        ];
        return await conn.query(sql, values);
    }catch(error){
        console.log(error);
    }
}

async function deleteCidadaoDispositivo(cpf, token) {
    try {
        const conn = await mysqlDb.connect();
        const sql = 'DELETE FROM cidadao_dispositivos WHERE cpf=? AND dispositivo_token=?';
        return await conn.query(sql, [cpf, token]);
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    selectCidadaoDispositivo,
    selectCidadaoDispositivos,
    insertCidadaoDispositivo,
    updateCidadaoDispositivo,
    deleteCidadaoDispositivo
};