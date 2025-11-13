import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Promotions from "./components/Promotions";
import Events from "./components/Events";
import ReservationForm from "./components/ReservationForm";
import Budget from "./components/Budget";
import Experiences from "./components/Experiences";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reserve" element={<ReservationForm />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;