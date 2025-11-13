import React, { useState } from "react";
import experiences from "../data/experiences";
import { useNavigate } from "react-router-dom";

function ReservationForm() {
  const [date, setDate] = useState("");
  const [experienceId, setExperienceId] = useState(experiences[0].id);
  const [numPeople, setNumPeople] = useState(1);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      experience: experiences.find((exp) => exp.id === +experienceId),
      date,
      numPeople,
      name
    };
    // Guardamos en localStorage para simular una persistencia
    localStorage.setItem("coox-reservation", JSON.stringify(reservation));
    navigate("/budget");
  };

  return (
    <div>
      <h2>Reservar Experiencia</h2>
      <form onSubmit={handleSubmit} className="reserve-form">
        <label>
          Nombre:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Experiencia:
          <select
            value={experienceId}
            onChange={e => setExperienceId(e.target.value)}
          >
            {experiences.map((exp) => (
              <option value={exp.id} key={exp.id}>{exp.title} - ${exp.price}</option>
            ))}
          </select>
        </label>
        <label>
          Fecha del viaje:
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={e => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Número de personas:
          <input
            type="number"
            min={1}
            value={numPeople}
            onChange={e => setNumPeople(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calcular presupuesto</button>
      </form>
    </div>
  );
}

export default ReservationForm;