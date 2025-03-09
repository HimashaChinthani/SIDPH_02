import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/adminview.css';

const AdminPlayersView = () => {
  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    axios.get("/api/players")
      .then(response => setPlayers(response.data))
      .catch(err => console.error(err));
  }, []);

  // Function to handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter players based on search query
  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="AdminBody">
      <h2>Players List</h2>
      
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search players by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      
      {/* Players Table */}
      <table className="players-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map(player => (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.points}</td>
                <td>{player.value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No players found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPlayersView;
