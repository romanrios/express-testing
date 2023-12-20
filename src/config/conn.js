require('dotenv').config();
const serverless = require('serverless-mysql');

const db = serverless({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
});

module.exports = {
    conn: db
};