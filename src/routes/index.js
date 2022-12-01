const express = require('express');
const routes = express.Router();

const { userRoutes } = require('./userRoutes');
const { writingsRoutes } = require('./writingsRoutes');

routes.use('/writings', writingsRoutes);
routes.use('/user', userRoutes);

module.exports = { routes };
