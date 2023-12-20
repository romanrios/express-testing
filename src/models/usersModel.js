const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        try {
            const rows = await conn.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            const e = {
                isError: true,
                message: `Error al consultar los datos: ${error}`
            }
            return e;
        } finally {
            await conn.end();
        }
    },

}