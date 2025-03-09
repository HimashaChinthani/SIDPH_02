import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../css/adminplayersstatus.css'; // Import the CSS file

const AdminPlayerStatus = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    axios.get(`/api/players/${id}`)
      .then(response => setPlayer(response.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!player) return <div className="loading">Loading...</div>;

  return (
    <div className="player-stats-container">
      <h2 className="player-name">{player.name} Stats</h2>
      
      <div className="player-stats">
        <p className="stat-item"><strong>Batting Strike Rate:</strong> {player.battingStrikeRate}</p>
        <p className="stat-item"><strong>Batting Average:</strong> {player.battingAverage}</p>
        <p className="stat-item"><strong>Bowling Strike Rate:</strong> {player.bowlingStrikeRate}</p>
        <p className="stat-item"><strong>Economy Rate:</strong> {player.economyRate}</p>
        <p className="stat-item"><strong>Points:</strong> {player.points}</p>
        <p className="stat-item"><strong>Value:</strong> {player.value}</p>
        <p className="stat-item"><strong>Wickets:</strong> {player.wickets}</p>
        <p className="stat-item"><strong>Runs:</strong> {player.runs}</p>
        <p className="stat-item"><strong>Batting Average:</strong> {player.battingAverage}</p>
        <p className="stat-item"><strong>Bowling Average:</strong> {player.bowlingAverage}</p>
      </div>
    </div>
  );
};

export default AdminPlayerStatus;
