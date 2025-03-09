import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import AdminPlayersView from "./components/AdminPlayersView";
import AdminPlayerStatus from "./components/AdminPlayerStatus";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Players from "./components/Players";
import PlayersList from "./components/PlayersList";
import PlayersView from "./components/playersview";
import PlayerDetail from "./components/playerDetail";
import TeamSelection from "./components/TeamSelection";
import TeamManagement from "./components/TeamManagement"
import Leaderboard from "./components/LeaderboardView";
import LeaderboardView from "./components/LeaderboardView";
import Chatbot from "./components/Chatbot";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setAuth={setIsAuthenticated} />} />
          
          <Route
            path="/players"
            element={isAuthenticated ? <Players /> : <Navigate to="/login" />}
          />
          <Route
            path="/PlayersList"
            element={isAuthenticated ? <PlayersList /> : <Navigate to="/login" />}
          />
          <Route
            path="/PlayersView"
            element={isAuthenticated ? <PlayersView /> : <Navigate to="/login" />}
          />
          <Route
            path="/AdminPlayersView"
            element={isAuthenticated ? <AdminPlayersView /> : <Navigate to="/login" />}
          />
          <Route
            path="/AdminPlayerStatus"
            element={isAuthenticated ? <AdminPlayerStatus /> : <Navigate to="/login" />}
          />
          <Route
            path="/TeamManagement"
            element={isAuthenticated ? <TeamManagement /> : <Navigate to="/login" />}
          />
          <Route
            path="/LeaderboardView"
            element={isAuthenticated ? <LeaderboardView /> : <Navigate to="/login" />}
          />
          <Route
            path="/PlayerDetail"
            element={isAuthenticated ? <PlayerDetail /> : <Navigate to="/login" />}
          />
          <Route
            path="/team-selection"
            element={isAuthenticated ? <TeamSelection /> : <Navigate to="/login" />}
          />
          <Route
            path="/leaderboard"
            element={isAuthenticated ? <Leaderboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/chatbot"
            element={isAuthenticated ? <Chatbot /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
