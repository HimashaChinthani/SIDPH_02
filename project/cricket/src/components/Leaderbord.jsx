// Leaderboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/api/leaderboard')
      .then(response => setPlayers(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {players.map(player => (
          <li key={player.username} style={{ fontWeight: player.loggedIn ? 'bold' : 'normal' }}>
            {player.username}: {player.points}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
