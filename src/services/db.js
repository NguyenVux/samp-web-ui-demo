const mysql = require('mysql');

const dbPool =  mysql.createPool({
    host: 'HOSTNAME',
    port:  'port',
    user: 'username',
    password: 'password',
    database: 'db name' //database chua account vd: sago
});

module.exports = {
    dbPool,

}