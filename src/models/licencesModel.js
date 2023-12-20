const { conn } = require('../config/conn');

module.exports = {

    getAll: async () => {
        let connection;
        try {
            connection = await conn.getConnection();
            const [rows] = await connection.query('SELECT * FROM licences;');
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            if (connection) connection.end();
        }
    },

};