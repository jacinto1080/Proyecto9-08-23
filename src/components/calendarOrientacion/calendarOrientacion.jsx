import { startOfTomorrow } from "date-fns";
import React, { useState } from "react";
import CalendarOrientacion from "react-calendar";

function CalendarioOrientacion() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="react-calendario">
      <CalendarOrientacion
        minDate={startOfTomorrow()}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default CalendarioOrientacion;
