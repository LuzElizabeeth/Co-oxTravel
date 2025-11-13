import React from "react";

function Budget() {
  const reservation = JSON.parse(localStorage.getItem("coox-reservation"));
  if (!reservation)
    return <p>No se encontró ninguna reserva. Por favor, regresa y haz tu reservación.</p>;

  const { experience, date, numPeople, name } = reservation;
  // Tasa de descuento ejemplo si reservas al menos 1 mes antes
  const today = new Date();
  const reserveDate = new Date(date);
  const diffMonths =
    reserveDate.getFullYear() * 12 +
    reserveDate.getMonth() -
    (today.getFullYear() * 12 + today.getMonth());

  let discount = 0;
  if (diffMonths >= 1) discount = 0.1;

  const subtotal = experience.price * numPeople;
  const discountAmount = subtotal * discount;
  const total = subtotal - discountAmount;

  return (
    <div>
      <h2>Presupuesto de tu viaje</h2>
      <p>Nombre: <b>{name}</b></p>
      <p>Experiencia: <b>{experience.title}</b></p>
      <p>Fecha: <b>{date}</b></p>
      <p>No. Personas: <b>{numPeople}</b></p>
      <p>Subtotal: ${subtotal}</p>
      {discount > 0 && (
        <p>Descuento por reserva anticipada (10%): -${discountAmount.toFixed(2)}</p>
      )}
      <h3>Total a pagar: ${total.toFixed(2)}</h3>
      <button onClick={() => {
        alert("¡Reserva enviada! Pronto te contactaremos.");
        localStorage.removeItem("coox-reservation");
      }}>Confirmar reserva</button>
    </div>
  );
}

export default Budget;