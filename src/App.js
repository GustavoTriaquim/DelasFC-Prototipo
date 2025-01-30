import React from "react";
import StartPage from "./Pages/StartPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/logincadastro" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
