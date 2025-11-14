// MapPage.jsx
import React from "react";

function MapPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Republica Mexicana</h1>

      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1z0Yyq5DyVL2ldTSM2_z8dTgsx8VfXl0&ehbc=2E312F"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapPage;