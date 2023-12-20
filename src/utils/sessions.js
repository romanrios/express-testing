// const { conn } = require('../config/conn')
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// const sessionStore = new MySQLStore({}, conn);

// module.exports = {

//     initSession: () => {
//         return session({
//             secret: 'secret-session',
//             resave: false,
//             saveUninitialized: false,
//             store: sessionStore,
//             rolling: true,
//             cookie: { maxAge: 5 * 60 * 1000, },
//         })
//     }

// }