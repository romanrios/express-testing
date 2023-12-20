//index.js

const express = require('express');
const app = express();
const PORT = 3000;
const mainRoutes = require('./src/routes/mainRoutes');
const { initSession } = require('./src/utils/sessions');
const path = require('path');

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views')); // agregamos path para Vercel

// middleware
app.use(initSession());

// Rutas
app.use('/', mainRoutes);

// variables que estarán disponibles en todas las views
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    res.locals.shopCart = req.session.shopCart;
    next();
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
