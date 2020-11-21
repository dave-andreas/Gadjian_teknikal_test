const mysql = require('mysql')

const db=mysql.createConnection({
    host:'localhost',
    user:'david',
    password:'!2#)9*RoY',
    database:'technical_test',
    port:'3306'
})

module.exports = db