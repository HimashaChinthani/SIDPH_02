const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const playerRoutes = require('./routes/players');
require('dotenv').config();
const tournamentSummary = require('./routes/TounamentSummary');

const SECRET_KEY = process.env.JWT_SECRET;


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // or your frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true
}));

mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('MongoDB Connected'))

  .catch(err => console.error("Mogodb Connection error:",err));

  app.use('/api/auth', authRoutes);
  app.use('/api/players', playerRoutes);
  app.use('/api/TounamentSummary', tournamentSummary);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));