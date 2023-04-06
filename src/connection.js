const { Pool } = require("pg")

const pool = new Pool({
    host: 'dpg-cgnhpcgdh87kgoaindf0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'clarke',
    password: 'ogrF8t35DWtatDi8eJS9lUrTqDCKWpYa',
    database: 'clarke_afm9',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    pool
}