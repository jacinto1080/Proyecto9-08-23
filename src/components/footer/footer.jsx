import IconoFooter from "../icono-image/logo-madrid-1030x130.jpg";
import IconoFacebook from "../icono-image/facebook-negro.png";
import IconoInstagram from "../icono-image/instagram-negro.png";
import IconoTwitter from "../icono-image/twitter-negro.png";
import "./footer.css";
const Footer = () =>{
    return(
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
    )
}
export default Footer;