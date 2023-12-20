const { getAllItems } = require('../models/productsModel')

module.exports = {

    getShop: async (req, res) => {
        const items = await getAllItems();

        res.render('./shop/shop',
            {
                view:
                {
                    title: "Shop | Funkoshop"
                },
                items,
                showFirst: "Funkos",
                sortBy: 'category_name'
            }
        );
    },

};