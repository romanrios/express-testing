const { getAll } = require('../models/productsModel');

module.exports = {

    getHome: async (req, res) => {

        req.session.count = req.session.count ? ++req.session.count : 1;
        sessionCount = req.session.count;
        
        const items = await getAll();
        console.log(items);
        
        if (items.isError) {
            return res.status(500).send('Hemos tenido un error al consultar los datos')
        }

        return res.send(String(sessionCount));
    },

}