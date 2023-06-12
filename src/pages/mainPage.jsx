
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
          height="500px"
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
              individualizada. <br /> Entre otras, comprende las siguientes
              tareas:
            </p>
            <li>
              Preparación de la víctima para minimizar los efectos de la
              experiencia y reacciones de aparición posterior.
            </li>
            <li>
              Intervención psicológica para incrementar la organización
              cognitiva de la víctima y su entrenamiento en el manejo de la
              ansiedad.
            </li>
          </ul>
        </div>

        <div className="cajas2">
          <ul>
            <h1 className="main-text">
              Servicio de orientación jurídica <br />
            </h1>
            <p className="main-text0">
              Orientado a facilitar las herramientas que tienen a su disposición
              las víctimas y los procesos de denuncia, incluyendo:
            </p>
            <li>
              Asesoramiento jurídico en procedimientos penales o en cualquier
              otra materia jurídica relacionada con la situación de la víctima.
            </li>
          </ul>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default MainPage;


// const MainPage = () => {
//   return (
//     <>
//     <div className="main-container">
//       <div className="cajas">Servicio municipal de atención
//         a victimas de
//            LGTBIfobia</div>

//       <div className="cajas">
//       <ul>
//           <h1 className="main-text">

// Servicio de asistencia psicológica.<br /></h1><p className="main-text">
//           Orientado a proporcionar asistencia psicológica a las víctimas de
//           LGTBIfobia que contacten con nosotros, realizando una intervención
//           individualizada. <br /> Entre otras, comprende las siguientes tareas:</p><li>
//           Preparación de la víctima para minimizar los efectos de la
//           experiencia y reacciones de aparición posterior.</li><li>
//           Intervención psicológica para incrementar la organización cognitiva
//           de la víctima y su entrenamiento en el manejo de la ansiedad.</li>
//           </ul>
//       </div>

//       <div className="cajas">14</div>
//       <div className="cajas">15</div>
//     </div>

//     </>
//   )
// };
// export default MainPage;

//------mi codigo--------------------

{
  /* <h1 className="main-text2">Contáctanos</h1> */
}

{
  /* <div className="whatssapp">
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
            Acceso Directo <br /> 623 53 30 35
          </a>
        </div> */
}

{
  /* <div className="mail">
          <h4>Email</h4>
          <a
            href="mailto:serviciolgtbifobia@imaginabienestar.com"
            target="_blank"
          >
            <img className="iconoMail" src={IconoEmail} alt="sobre" />
          </a>
        </div> */
}
// return (
//   <>
//     <section id="main-text">
//       <div className="">
//         <p className="pelabel-principal">Servicio municipal de atención</p>
//         <p className="pelabel-principal2">
//           a victimas de <br /> LGTBIfobia
//         </p>
//       </div>

//       <div className="pin">
//         <img
//           className="iconoWhatsapp"
//           src={IconoWhatsapp}
//           alt="IconoWhatsapp"
//         />
//         <p className="number">623 53 30 35</p>
//         <p className="pe-mapa">Accede al mapa</p>
//         <img className="pin-mapa" src={IconoMapa} alt="mapa" />
//         <a
//           className="a-Mapa"
//           href="https://www.google.com/maps/place/Av.+de+la+Albufera,+321,+Puerta+12,+28031+Madrid,+Espa%C3%B1a/@40.3835397,-3.6361464,17z/data=!3m1!4b1!4m9!1m2!2m1!1sAvda.+de+la+Albufera+321.+Planta+2+Puerta+12+Madrid+28031!3m5!1s0xd42251d1f6741a1:0xabe063da33263f57!8m2!3d40.3835357!4d-3.6312755!15sCjlBdmRhLiBkZSBsYSBBbGJ1ZmVyYSAzMjEuIFBsYW50YSAyIFB1ZXJ0YSAxMiBNYWRyaWQgMjgwMzGSARBjb21wb3VuZF9zZWN0aW9u4AEA"
//           target="_blank"
//         >
//           Avda. de la Albufera 321. Planta 2 Puerta 12 Madrid 28031
//         </a>
//       </div>

//       <div className="card-container">
//         <p className="pSM">Redes Sociales</p>
//         <a
//           href="https://www.facebook.com/profile.php?id=100079658599308"
//           target="_blank"
//         >
//           <img className="iconoContacto" src={IconoFacebook} alt="facebook" />
//         </a>
//         <a
//           href="https://www.instagram.com/madridcontralgtbifobia/"
//           target="_blank"
//         >
//           <img
//             className="iconoContacto"
//             src={IconoInstagram}
//             alt="instagram"
//           />
//         </a>
//         <a href="https://twitter.com/Lgtbifobiamad" target="_blank">
//           <img className="iconoContacto" src={IconoTwitter} alt="twitter" />
//         </a>
//         <a
//           href="mailto:serviciolgtbifobia@imaginabienestar.com"
//           target="_blank"
//         >
//           <img className="iconoContacto" src={IconoEmail} alt="sobre" />
//         </a>
//       </div>
//     </section>

//     <section id="tocho-card">
//       <div className="texto">
//         <ul>
//           <h1 className="main-text">
//             - Servicio de asistencia psicológica.
//             <br />
//           </h1>
//           <p className="main-text">
//             Orientado a proporcionar asistencia psicológica a las víctimas de
//             LGTBIfobia que contacten con nosotros, realizando una intervención
//             individualizada. <br /> Entre otras, comprende las siguientes
//             tareas:
//           </p>
//           <li>
//             Preparación de la víctima para minimizar los efectos de la
//             experiencia y reacciones de aparición posterior.
//           </li>
//           <li>
//             Intervención psicológica para incrementar la organización
//             cognitiva de la víctima y su entrenamiento en el manejo de la
//             ansiedad.
//           </li>
//           <li>
//             Activación de recursos internos (estrategias de afrontamiento) y
//             externos (apoyo social, laboral y familiar) para minimizar la
//             victimización secundaria.
//           </li>
//           <li>
//             Realización de actuaciones en el ámbito psicológico relacionadas
//             con órdenes de protección.
//           </li>
//           <h1 className="main-text">
//             - Servicio de orientación jurídica. <br />
//           </h1>
//           <p className="main-text">
//             Orientado a facilitar las herramientas que tienen a su disposición
//             las víctimas y los procesos de denuncia, incluyendo:
//           </p>
//           <li>
//             Asesoramiento jurídico en procedimientos penales o en cualquier
//             otra materia jurídica relacionada con la situación de la víctima.
//           </li>
//           <li>
//             Información y asesoramiento sobre tramitación, gestión y
//             elaboración de denuncias u otros dictámenes e informes jurídicos.
//           </li>
//           <li>
//             Colaboración con órganos judiciales y representantes legales de
//             las víctimas para evitar los efectos de la victimización
//             secundaria.
//           </li>
//           <li>
//             Asesoramiento y gestión de solicitud o petición de medidas de
//             protección.
//           </li>
//         </ul>
//       </div>
//     </section>
//   </>
// );
{
  /* <p className="main-text-mapa">Accede al mapa</p>
          <img className="pin-mapa" src={IconoMapa} alt="mapa" />
          <a
            className="a-Mapa"
            href="https://www.google.com/maps/place/Av.+de+la+Albufera,+321,+Puerta+12,+28031+Madrid,+Espa%C3%B1a/@40.3835397,-3.6361464,17z/data=!3m1!4b1!4m9!1m2!2m1!1sAvda.+de+la+Albufera+321.+Planta+2+Puerta+12+Madrid+28031!3m5!1s0xd42251d1f6741a1:0xabe063da33263f57!8m2!3d40.3835357!4d-3.6312755!15sCjlBdmRhLiBkZSBsYSBBbGJ1ZmVyYSAzMjEuIFBsYW50YSAyIFB1ZXJ0YSAxMiBNYWRyaWQgMjgwMzGSARBjb21wb3VuZF9zZWN0aW9u4AEA"
            target="_blank"
          >
            Avda. de la Albufera 321. Planta 2 Puerta 12 Madrid 28031
          </a> */
}
