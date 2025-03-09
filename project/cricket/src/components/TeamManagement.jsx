// TeamManagement.jsx
import React, { useState } from 'react';

function TeamManagement() {
  const [team, setTeam] = useState([]);
  const [budget, setBudget] = useState(9000000); // Starting budget

  const handleAddPlayer = (player) => {
    if (team.length < 11) {
      setTeam([...team, player]);
      setBudget(budget - player.value); // Deduct player's value from budget
    } else {
      alert('You can only select 11 players!');
    }
  };

  const handleRemovePlayer = (playerId) => {
    const newTeam = team.filter(player => player.id !== playerId);
    const removedPlayer = team.find(player => player.id === playerId);
    setTeam(newTeam);
    setBudget(budget + removedPlayer.value); // Add removed player's value back to budget
  };

  return (
    <div>
      <h2>Team Management</h2>
      <p>Remaining Budget: Rs. {budget}</p>
      <ul>
        {team.map(player => (
          <li key={player.id}>
            {player.name} - {player.value}
            <button onClick={() => handleRemovePlayer(player.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddPlayer({ id: 1, name: 'Player A', value: 1000000 })}>Add Player A</button>
    </div>
  );
}

export default TeamManagement;
