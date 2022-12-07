const express = require('express');
const routes = express.Router();

const { authRoutes } = require('./authRoutes');
const { writingsRoutes } = require('./writingsRoutes');

routes.use('/writings', writingsRoutes);
routes.use('/auth', authRoutes);

module.exports = { routes };
