const express = require('express');

const userRoutes = express.Router();

const { userControllers } = require('../controllers');

userRoutes.post('/signin', userControllers.signIn);

module.exports = { userRoutes };
