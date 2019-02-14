const express = require('express');
const routes = express.Router();
const { getLyrics } = require('../controllers/lyricController');

routes.post('/', getLyrics);

module.exports = routes;
