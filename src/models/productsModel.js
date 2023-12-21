const mysql = require('mysql2/promise')
const connOb = require('../config/conn');

module.exports = {
    getAll: async () => {
        const conn = await mysql.createConnection(connOb)
        try {
            const [rows] = await conn.query('SELECT products.*, licences.licence_name, categories.category_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id LEFT JOIN categories ON products.category_id = categories.category_id ORDER BY product_id DESC;');
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

    getOne: async (params) => {

        try {

            // 'SELECT
            //   products.*,
            //   licences.licence_name,
            //   categories.category_name AS category_name
            // FROM
            //   products
            // LEFT JOIN
            //   licences ON products.licence_id = licences.licence_id
            // LEFT JOIN
            //   categories ON products.category_id = categories.category_id
            // WHERE
            //   ?;', params

            const [rows] = await conn.query('SELECT products.*, licences.licence_name, categories.category_name FROM products LEFT JOIN licences ON products.licence_id = licences.licence_id LEFT JOIN categories ON products.category_id = categories.category_id WHERE ?;', params);
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
    }
}

