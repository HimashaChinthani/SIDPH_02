const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/cricket", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PlayerSchema = new mongoose.Schema({
  name: String,
  stats: Object,
});
const Player = mongoose.model("Player", PlayerSchema);

app.post("/api/chatbot", async (req, res) => {
  const { message } = req.body;

  if (message.toLowerCase().includes("best team")) {
    const bestPlayers = await Player.find().sort({ "stats.points": -1 }).limit(11);
    return res.json({ reply: `Best team: ${bestPlayers.map(p => p.name).join(", ")}` });
  }

  const player = await Player.findOne({ name: { $regex: new RegExp(message, "i") } });
  if (player) {
    return res.json({ reply: `${player.name} stats: ${JSON.stringify(player.stats)}` });
  }

  res.json({ reply: "I don't have enough knowledge to answer that question." });
});

app.listen(5000, () => console.log("Chatbot server running on port 5000"));
