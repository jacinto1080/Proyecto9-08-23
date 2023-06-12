import "react-calendar/dist/Calendar.css";
import FiltrarServicios from "../filtrarServicios/filtrarServicios";
import { useState } from "react";
import ModalFormulario from "../modalFormulario/modalFormulario";
import Horas from "../horas/horas";
import CalendarioApoyo from "../calendarApoyo/calendarApoyo";
import CalendarioOrientacion from "../calendarOrientacion/calendarOrientacion";
import DirectContact from "../directContact/directContac";
import RedesSociales from "../redes-sociales/redes-sociales";
import Titulo2png from "../icono-image/titulo2.png";
import "./modalCitas.css";
import "../../index.css";
import Footer from "../footer/footer";


const ModalCitas = () => {
  const [selectedValue, updateSelectedValue] = useState("");
  const [selectedValue2, updateSelectedValue2] = useState();
  const onSelectChange = ({ target: { value } }) => updateSelectedValue(value);
  const onChange = ({ target: { value } }) => updateSelectedValue2(value);

  return (
    <>
      <div className="main-container-cita" >
      <DirectContact />
      
      <RedesSociales />

      <img className="tituloCita" src={Titulo2png} alt="" />
     
      <div className="formulario">     
        <FiltrarServicios selectedValue={selectedValue} onSelectChange={onSelectChange} />
        {selectedValue === "apoyo" && <CalendarioApoyo />}
        {selectedValue === "orientación" && <CalendarioOrientacion />}

        {selectedValue === "apoyo" && <Horas onChange={onChange} />}
        {selectedValue === "orientación" && <Horas onChange={onChange} />}

        {selectedValue2 && (
          <ModalFormulario
            updateSelectedValue={updateSelectedValue}
            updateSelectedValue2={updateSelectedValue2}
          />
        )}
        </div>
        <div className="Creadores">By TSJ</div>
        </div>
      <Footer/>
    </>
  );
};
export default ModalCitas;
