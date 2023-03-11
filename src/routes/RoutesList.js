import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/Landing";
import Plus from "../pages/plus/Plus";
import Safety from "../pages/safety/Safety";
import Shelter from "../pages/shelter/Shelter";

const RoutesList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/PlusPage" element={<Plus />} />
        <Route path="/SafetyPage" element={<Safety />} />
        <Route path="/ShelterPage" element={<Shelter />} />
      </Routes>
    </Router>
  );
};

export default RoutesList;
