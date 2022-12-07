const express = require('express');
const routes = express.Router();

const { authRoutes } = require('./authRoutes');
const { writingsRoutes } = require('./writingsRoutes');
const { likesRoutes } = require('./likesRoutes');
const { usersRoutes } = require('./usersRoutes');
const { paymentRoutes } = require('./paymentRoutes');

routes.use('/mypage', usersRoutes);
routes.use('/payment', paymentRoutes);
routes.use('/writings', writingsRoutes);
routes.use('/auth', authRoutes);
routes.use('/likes', likesRoutes);

module.exports = { routes };
