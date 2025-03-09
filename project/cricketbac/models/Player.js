const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  runs: Number,
  wickets: Number,
  battingStrikeRate: Number,
  bowlingStrikeRate: Number,
  economyRate: Number,
  value: Number,
  points: Number
});

// Function to calculate points and value
function calculatePoints(player) {
  const points = (player.battingStrikeRate * 5) + 
                 (player.runs * 0.8) + 
                 (player.wickets * 20) + 
                 (player.bowlingStrikeRate) + 
                 (140 - player.economyRate * 2);

  const value = Math.round((9 * points + 100) * 1000 / 50000) * 50000; // Rounds to nearest 50,000
  return { points, value };
}

// Middleware to calculate points before saving
playerSchema.pre('save', function (next) {
  const { points, value } = calculatePoints(this);
  this.points = points;
  this.value = value;
  next();
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
