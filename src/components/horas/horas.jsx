import React, { useState } from "react";

const Horas = ({onChange}) => {
  return (
   
    <select onChange={onChange} className="inputFormHora" id="horas">
      <option value="">Seleccione hora disponible</option>
      <option value="08:00">08:00</option>
      <option value="08:30">08:30</option>
      <option value="09:00">09:00</option>
      <option value="09:30">09:30</option>
      <option value="10:00">10:00</option>
      <option value="10:30">10:30</option>
    </select>
  );
}
export default Horas;
