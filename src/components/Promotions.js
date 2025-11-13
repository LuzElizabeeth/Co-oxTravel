import React from "react";
import promotions from "../data/promotions";

function Promotions() {
  return (
    <div>
      <h2>Promociones</h2>
      <ul className="promo-list">
        {promotions.map((promo) => (
          <li key={promo.id} className="promo-card">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <p><b>Lugar:</b> {promo.location}</p>
            <p><b>Vigencia:</b> {promo.validFrom} - {promo.validTo}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Promotions;