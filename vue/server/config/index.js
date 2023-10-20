const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'effective',
    password: 'kopeika541',
    port: 5432
})
