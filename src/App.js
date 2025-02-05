import React from "react";
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import DelasFCCheckin from "./Pages/CheckinPages/DelasFC-Checkin";
import PeladasCheckin from "./Pages/CheckinPages/Peladas-Checkin";
import ContactPage from "./Pages/ContactPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/logincadastro" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkinDelasFC" element={<DelasFCCheckin />} />
        <Route path="/checkinPeladas" element={<PeladasCheckin />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
