//index.js

const express = require('express');
const app = express();
const PORT = 3000;
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const { initSession } = require('./src/utils/sessions');
const path = require('path');


// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); // agregamos path para Vercel

// Middlewares de configuración
// app.use(express.json()); // Nos ahorra usar JSON.parse() al recibir datos y JSON.stringify() para enviarlos. Permite capturar json en req.body.
// app.use(express.urlencoded()); // Permite capturar datos de formulario (application/x-www-form-urlencoded) con req.body    (deprecated?)
// app.use(methodOverride('_method')); // para PUT y DELETE
app.use(express.static(path.resolve(__dirname, 'public'))); // define carpeta de archivos estáticos

// Session
app.use(initSession());

// Rutas
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);


// variables que estarán disponibles en todas las views
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    res.locals.shopCart = req.session.shopCart;
    next();
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
