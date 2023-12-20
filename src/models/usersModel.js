const { conn } = require('../config/conn');

module.exports = {
    getAll: async () => {
        try {
            const rows = await conn.query('SELECT * FROM users');
            await conn.end();
            return rows;
        } catch (error) {
            return { error };

        }
    },

}