import "react-calendar/dist/Calendar.css";
import FiltrarServicios from "../filtrarServicios/filtrarServicios";
import { useState } from "react";
import ModalFormulario from "../modalFormulario/modalFormulario";
import Horas from "../horas/horas";
import CalendarioApoyo from "../calendarApoyo/calendarApoyo";
import CalendarioOrientacion from "../calendarOrientacion/calendarOrientacion";
import DirectContact from "../directContact/directContac";
import RedesSociales from "../redes-sociales/redes-sociales";
import IconoFacebook from "../icono-image/facebook-negro.png";
import IconoInstagram from "../icono-image/instagram-negro.png";
import IconoTwitter from "../icono-image/twitter-negro.png";
import IconoFooter from "../icono-image/logo-madrid-1030x130.jpg";
import Titulo2png from "../icono-image/titulo2.png";
import "./modalCitas.css";
import "../../index.css";


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
      <footer>
        <div className="footer-things">
          <div className="caja1-footer">
            <p className="p-footer">www.madrid.es/igualdad</p>
          </div>
          <div className="caja2-footer">
            <a
              href="https://www.facebook.com/profile.php?id=100079658599308"
              target="_blank"
            >
              <img
                title="Enlace externo en nueva ventana: Facebook"
                className="icono-face-negro"
                src={IconoFacebook}
                alt="facebook"
              />
            </a>
            <a href="https://twitter.com/Lgtbifobiamad" target="_blank">
              <img
                title="Enlace externo en nueva ventana: Twitter"
                className="icono-twit-negro"
                src={IconoTwitter}
                alt="twitter"
              />
            </a>
            <a
              href="https://www.instagram.com/madridcontralgtbifobia/"
              target="_blank"
            >
              <img
                title="Enlace externo en nueva ventana: Instagram"
                className="icono-insta-negro"
                src={IconoInstagram}
                alt="instagram"
              />
            </a>
          </div>
          <div className="caja3-footer">
            <img className="footer-img" src={IconoFooter} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};
export default ModalCitas;
