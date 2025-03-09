const express = require('express');
const Player = require('../models/playerModel');
const router = express.Router();

// Create Player
router.post('/players', async (req, res) => {
  try {
    const newPlayer = new Player(req.body);
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get All Players
router.get('/players', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update Player
router.put('/players/:id', async (req, res) => {
  try {
    let player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: "Player not found" });

    // Update player stats
    Object.assign(player, req.body);

    // Save the player, triggering the pre-save middleware
    await player.save();
    res.json(player);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete Player
router.delete('/players/:id', async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id);
    res.json({ message: 'Player deleted' });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
