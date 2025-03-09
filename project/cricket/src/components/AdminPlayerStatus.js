// PlayerStatsView.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminPlayerStatus = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(`/api/players/${id}`)
      .then(response => setPlayer(response.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name} Stats</h2>
      <p>Batting Strike Rate: {player.battingStrikeRate}</p>
      <p>Batting Average: {player.battingAverage}</p>
      <p>Bowling Strike Rate: {player.bowlingStrikeRate}</p>
      <p>Economy Rate: {player.economyRate}</p>
      <p>Points: {player.points}</p>
      <p>Value: {player.value}</p>
    </div>
  );
};

export default AdminPlayerStatus;
