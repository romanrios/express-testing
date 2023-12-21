const mysql = require('mysql2/promise')
const connOb = require('../config/conn');

module.exports = {
    getAll: async () => {
        const conn = await mysql.createConnection(connOb)
        try {
            const [rows] = await conn.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            conn.end();
        }
    },

}