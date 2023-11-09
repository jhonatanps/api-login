const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    max: 20,
    port: 5432,
    ssl:{
        rejectUnauthorized: false,
    }
})

module.exports = pool