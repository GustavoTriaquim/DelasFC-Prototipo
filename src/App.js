import React from "react";
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import DelasFCCheckin from "./Pages/CheckinPages/DelasFC-Checkin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/logincadastro" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkinDelasFC" element={<DelasFCCheckin />} />
      </Routes>
    </Router>
  );
}

export default App;
