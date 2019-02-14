const express = require('express');
const routes = express.Router();
const { getLyrics } = require('../controllers/lyricController');

routes.get('/', getLyrics);

module.exports = routes;
