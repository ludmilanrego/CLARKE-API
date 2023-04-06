const { Pool } = require("pg")

const pool = new Pool({
    host: 'dpg-cgnhpcgdh87kgoaindf0-a.oregon-postgres.render.com',
    port: 5432,
    user: 'clarke',
    password: '14YkQ49Ji21uKdBdJxszGrulfuADrCl1',
    database: 'clarke_afm9',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    pool
}