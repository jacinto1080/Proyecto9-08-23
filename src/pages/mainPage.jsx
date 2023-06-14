
import "./mainPage.css";
import DirectContact from "../components/directContact/directContac";
import RedesSociales from "../components/redes-sociales/redes-sociales";
import Titulo2png from "../components/icono-image/titulo2.png";
import InfoComponent from "../components/infoComponent/infoComponent";
import IconoSilla from "../components/icono-image/icono-silla-blanco.png"
import Footer from "../components/footer/footer";
const MainPage = () => {
  return (
    <>
      <DirectContact />
      <RedesSociales />
      <img className="titulo2png" src={Titulo2png} alt="" />
      
        <div className="caja-important-Info">
          <ul>
            <h1 className="main-text">
              Requisitos del Servicio de Atención a Víctimas de LGTBIfobia:
            </h1>
            <li>Residencia en la ciudad de Madrid.</li>
            <li>
              El delito se ha podido producir a través de cualquier medio:
              directamente en persona o a través de RRSS u otros medios
              telemáticos.
            </li>
            <li>
              El delito se ha podido producir en cualquier lugar: atendemos
              incluso a personas que vienen a Madrid procedente de otros países
              y el delito se ha producido en país de origen.
            </li>
          </ul>
        </div>
          <p className="main-text-silla">
            <img className='silla' src={IconoSilla}/>
            Instalación accesible para personas con movilidad reducida
          </p>
        <div className="main-container-total" >
      <div className="main-container1">
      <InfoComponent />
      <div className="caja-mapa">
        <h1 className="main-text1">Avenida Albufera 321, planta 2 - 12</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3039.130275169162!2d-3.6336567735182075!3d40.38380520764179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAvenida%20de%20la%20Albufera%2C%20321%2C%20Ed.%20Vallausa%20II%20%E2%80%93%20Pl.2%C2%AA%20%E2%80%93%20Local%2012%2C%2028031%20Madrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1686050305619!5m2!1ses!2ses" 
          width="420px"
          height="450px"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
      <div className="main-container2">
        <div className="cajas2">
          <ul>
            <h1 className="main-text">
              Servicio de asistencia psicológica
              <br />
            </h1>
            <p className="main-text0">
              Orientado a proporcionar asistencia psicológica a las víctimas de
              LGTBIfobia que contacten con nosotros, realizando una intervención
              individualizada. 
            </p>
            <p title="Accede" className="preguntas">
                <a className="link-preguntas" href="/preguntasFrecuentes">
                  {" "}
                  Preguntas frecuentes
                </a>
              </p>
          </ul>
        </div>

        <div className="cajas2">
          <ul>
            <h1 className="main-text">
              Servicio de orientación jurídica <br />
            </h1>
            <p className="main-text0">
              Orientado a facilitar las herramientas que tienen a su disposición
              las víctimas y los procesos de denuncia.
            </p>
          </ul>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default MainPage;


