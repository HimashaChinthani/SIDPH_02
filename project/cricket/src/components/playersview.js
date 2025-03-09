// PlayersView.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const PlayersView = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get("/api/players")
      .then(response => setPlayers(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Players List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.points}</td>
              <td>{player.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersView;
