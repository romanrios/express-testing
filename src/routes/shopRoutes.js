const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController.js');

router.get('/', shopController.getShop);

module.exports = router;