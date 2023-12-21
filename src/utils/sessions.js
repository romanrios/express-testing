require('dotenv').config();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,    
    expiration: 5000,
    checkExpirationInterval: 5000,
    clearExpired: true,
    endConnectionOnClose: true,

}

const sessionStore = new MySQLStore(options);

module.exports = {

    initSession: () => {
        return session({
            secret: process.env.SESSION_NAME,
            resave: false,
            saveUninitialized: false,
            store: sessionStore,
            rolling: true,
            cookie: { maxAge: 5 * 60 * 1000, },
        })
    },

}