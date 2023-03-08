import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PlusPage from "../pages/plus/PlusPage";
import SafetyPage from "../pages/safety/SafetyPage";
import ShelterPage from "../pages/shelter/ShelterPage";

const RoutesList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/PlusPage" element={<PlusPage />} />
        <Route path="/SafetyPage" element={<SafetyPage />} />
        <Route path="/ShelterPage" element={<ShelterPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesList;
