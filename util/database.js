const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'remotemysql.com',
    user: '8yI7g8YPVw',
    database: '8yI7g8YPVw',
    password: 'I33R35tUCk'
});

module.exports = pool.promise();