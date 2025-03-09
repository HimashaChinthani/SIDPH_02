import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Players from "./components/players";
import TeamSelection from "./components/TeamSelection";
import Leaderboard from "./components/LeaderboardView";
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
