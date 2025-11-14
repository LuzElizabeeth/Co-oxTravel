import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Co'ox Travel</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/promotions">Promociones</Link></li>
        <li><Link to="/events">Eventos</Link></li>
        <li><Link to="/reserve">Reservaciones</Link></li>
        <li><Link to="/experiences">Experiencias</Link></li>
        <li><Link to="/map">Mapa</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;