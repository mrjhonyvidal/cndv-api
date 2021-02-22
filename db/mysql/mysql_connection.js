
async function connect(){
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection;
    }

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://cndv:C123N456D789V@localhost:3306/cndv");
    console.log("Connected to MySQL");
    global.connection = connection;
    return connection;
}

module.exports = {connect}

