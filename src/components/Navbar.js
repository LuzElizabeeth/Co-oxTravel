import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title"></div>
              <img src="logo.png" alt="Logo Co'ox Travel" className="hero-logo" /> 

      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/promotions">Promociones</Link></li>
        <li><Link to="/events">Eventos</Link></li>
        <li><Link to="/reserve">Reservaciones</Link></li>
        <li><Link to="/experiences">Experiencias</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;