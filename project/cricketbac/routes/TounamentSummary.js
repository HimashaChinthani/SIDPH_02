// tournamentSummary.js (API Endpoint)
const express = require('express');
const Player = require('../models/player');
const router = express.Router();

router.get('/tournament-summary', async (req, res) => {
  try {
    const players = await Player.find();
    const overallRuns = players.reduce((acc, player) => acc + player.runs, 0);
    const overallWickets = players.reduce((acc, player) => acc + player.wickets, 0);
    const highestRunScorer = players.reduce((max, player) => player.runs > max.runs ? player : max, players[0]);
    const highestWicketTaker = players.reduce((max, player) => player.wickets > max.wickets ? player : max, players[0]);

    res.json({
      overallRuns,
      overallWickets,
      highestRunScorer,
      highestWicketTaker
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
