const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'effective',
    password: '',
    port: 5432
})
