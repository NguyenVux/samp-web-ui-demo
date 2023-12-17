const mysql = require('mysql2');

const dbPool =  mysql.createPool({
    host: 'localhost',
    port:  '6789',
    user: 'root',
    password: 'admin',
    database: 'SAMP' //database chua account vd: sago
});

module.exports = {
    dbPool,

}