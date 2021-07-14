const express = require('express');
const router = express.Router();
const route_playlist = require('./route_playlists');

router.use('/playlists', route_playlist);

module.exports = router;