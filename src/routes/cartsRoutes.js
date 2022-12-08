const express = require('express');
const { cartsController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const cartsRoutes = express.Router();

cartsRoutes.get('', loginRequired, cartsController.showCart);
cartsRoutes.post('', loginRequired, cartsController.addCart);
module.exports = { cartsRoutes };
