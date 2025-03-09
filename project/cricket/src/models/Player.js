const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    stats: {
      battingAverage: Number,
      bowlingAverage: Number,
      points: Number,
    },
    value: Number,
  });
  
  module.exports = mongoose.model('Player', PlayerSchema);