// PlayerDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlayerDetail() {
  const { playerId } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(`/api/players/${playerId}`)
      .then(response => setPlayer(response.data))
      .catch(err => console.error(err));
  }, [playerId]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>University: {player.university}</p>
      <p>Stats: {player.stats}</p>
    </div>
  );
}

export default PlayerDetail;
