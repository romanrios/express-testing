require('dotenv').config();
const serverless = require('serverless-mysql');

const db = serverless({
    config: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    pool: {
        min: 1,      // Número mínimo de conexiones en el pool
        max: 5,      // Número máximo de conexiones en el pool
        idleTimeoutMillis: 30000, // Tiempo máximo (en milisegundos) que una conexión puede estar inactiva antes de ser cerrada
        acquireTimeoutMillis: 30000, // Tiempo máximo (en milisegundos) que una conexión puede estar esperando para ser adquirida del pool
    },
});

module.exports = {
    conn: db
};