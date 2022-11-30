const express = require('express');
const routes = express.Router();

const { authRoutes } = require('./authRoutes');
const { writingsRoutes } = require('./writingsRoutes');
const { likesRoutes } = require('./likesRoutes');
const { loginRequired } = require('../utils/auth');

routes.use('/writings', writingsRoutes);
routes.use('/auth', authRoutes);
routes.use('/likes', likesRoutes);

module.exports = { routes };
