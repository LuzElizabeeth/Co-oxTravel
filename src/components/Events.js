import React from "react";
import events from "../data/events";

function Events() {
  return (
    <div>
      <h2>Eventos</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p><b>Fecha:</b> {event.date}</p>
            <p><b>Lugar:</b> {event.place}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;