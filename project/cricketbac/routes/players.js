const express = require('express');
const Player = require('../models/Player');
const router = express.Router();

router.get('/', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

module.exports = router;