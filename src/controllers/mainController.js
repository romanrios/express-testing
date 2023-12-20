const { getAllItems } = require('../models/productsModel');
const { getAllLicences } = require('../models/licencesModel');

module.exports = {

    getHome: async (req, res) => {

        // req.session.count = req.session.count ? ++req.session.count : 1;
        // console.log(req.session.count);

        const items = await getAllItems();
        const licences = await getAllLicences();

        // Ejemplo de manejo de error al consultar la BBDD
        if (items.isError || licences.isError) {
            return res.status(500).send('Hemos tenido un error al consultar los datos')
        }

        return res.render('./home',
            {
                view:
                {
                    title: "Home | Funkoshop"
                },
                items,
                licences
            }
        );
    },
}