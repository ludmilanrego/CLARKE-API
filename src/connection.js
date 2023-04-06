const { Pool } = require("pg")

const pool = new Pool({
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    pool
}