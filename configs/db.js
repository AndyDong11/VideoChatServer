let mysql = require('mysql2')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'socialmedia'
})

module.exports = connection