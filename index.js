const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql2');

// Base de datos
const pool = mysql.createPool({
    host: 'mysql-romanrios.alwaysdata.net',
    user: 'romanrios',
    password: 'RiosMan2021',
    database: 'romanrios_funkoshop',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
const conn = pool.promise();


const getAll = async () => {
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
        conn.releaseConnection();
    }
};

app.get('/', async (req, res) => {
    const hola = await getAll();
    res.send(hola);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));