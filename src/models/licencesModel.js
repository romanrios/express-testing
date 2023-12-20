const { conn } = require('../config/conn');

module.exports = {

    getAll: async () => {
        try {
            const rows = await conn.query('SELECT * FROM licences;');
            await conn.end();
            return rows;
        } catch (error) {
            return { error };

        }
    },

};