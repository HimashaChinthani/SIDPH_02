// Players.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('/api/players')
      .then(response => setPlayers(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player._id}>
            <a href={`/players/${player._id}`}>{player.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Players;
