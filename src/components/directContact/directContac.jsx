import IconoEmail from "../icono-image/sobre-blanco.png";
import IconoWhatsapp from "../icono-image/whatsappVerde.svg";
import "./directContact.css";

const DirectContact = () => {
  return (
    <div className="cajas1-0">

      <div className="whatssapp">
        <a
          className="main-text-number"
          href="https://api.whatsapp.com/send?phone=34623533035"
          target="_blank"
        >
          <img
            className="iconoWhatsapp"
            src={IconoWhatsapp}
            alt="IconoWhatsapp"
          ></img>
          <span className="AD">Acceso Directo <br /> 623 53 30 35</span> 
        </a>
      </div>
      <div className="mail">
        
        <a
          href="mailto:serviciolgtbifobia@imaginabienestar.com"
          target="_blank"
        >
          <img className="iconoMail" src={IconoEmail} alt="sobre" />
          <h4 className="AD">Email</h4>
        </a>
      </div>
    </div>
  );
};
export default DirectContact;
