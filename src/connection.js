const { Pool } = require("pg")

const pool = new Pool({
    host: 'dpg-cgnh2ntkpb7np52pm1tg-a',
    port: 5432,
    user: 'clarke_user',
    password: '14YkQ49Ji21uKdBdJxszGrulfuADrCl1',
    database: 'clarke',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    pool
}