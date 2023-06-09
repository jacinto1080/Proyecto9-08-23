import IconoFacebook from "../icono-image/facebook-blanco.svg";
import IconoInstagram from "../icono-image/instagram-blanco.svg";
import IconoTwitter from "../icono-image/twitter-blanco.svg";
import "./redes-sociales.css";

const RedesSociales = () => {
  return (
    <div className="redesSociales">
        
      <a
        href="https://www.facebook.com/profile.php?id=100079658599308"
        target="_blank"
      >
        <img
        title="Enlace externo en nueva ventana: Facebook"
          className="iconoContacto-face"
          src={IconoFacebook}
          alt="facebook"
        />
      </a>
      <a href="https://twitter.com/Lgtbifobiamad" target="_blank">
        <img 
        title="Enlace externo en nueva ventana: Twitter"
        className="iconoContacto-twit" src={IconoTwitter} alt="twitter" />
      </a>
      <a
        href="https://www.instagram.com/madridcontralgtbifobia/"
        target="_blank"
      >
        <img
          title="Enlace externo en nueva ventana: Instagram"
          className="iconoContacto-insta"
          src={IconoInstagram}
          alt="instagram"
        />
      </a>
    </div>
  );
};
export default RedesSociales;
