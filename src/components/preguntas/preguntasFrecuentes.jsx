import React, { useState } from "react";
import IconoFacebook from "../icono-image/facebook-blanco.svg";
import IconoInstagram from "../icono-image/instagram-blanco.svg";
import IconoTwitter from "../icono-image/twitter-blanco.svg";
import Titulo2png from "../icono-image/titulo2.png";
import IconoEmail from "../icono-image/sobre-blanco.png";
import IconoWhatsapp from "../icono-image/whatsappVerde.svg";
import "./preguntasFrecuentes.css";
import Footer from "../footer/footer";

const PreguntasFrecuentes = () => {
  const [expanded0Izq, setExpanded0Izq] = useState(false);
  const [expanded0Dcha, setExpanded0Dcha] = useState(false);
  const [expanded1Izq, setExpanded1Izq] = useState(false);
  const [expanded1Dcha, setExpanded1Dcha] = useState(false);
  const [llegarExpandedIzq, setLlegarExpandedIzq] = useState(false);
  const [llegarExpandedDcha, setLlegarExpandedDcha] = useState(false);
  const [horarioExpandedIzq, setHorarioExpandedIzq] = useState(false);
  const [horarioExpandedDcha, setHorarioExpandedDcha] = useState(false);

  //----------------------------Textos izquierda---------------------------------
  const content0Izq = (
    <div>
      <ul className="ul-cajitas">
        La LGTBIfobia se refiere a la aversión, discriminación o violencia
        dirigida hacia personas lesbianas, gays, bisexuales, transgénero e
        intersexuales (LGBTI) debido a su orientación sexual, identidad de
        género o características sexuales.
      </ul>
    </div>
  );
  const content1Izq = (
    <div>
      <ul className="ul-cajitas">
        Algunos ejemplos de LGTBIfobia incluyen insultos homofóbicos o
        transfóbicos, agresiones físicas, discriminación en el lugar de trabajo
        o en la vivienda, exclusión social, estigmatización y negación de
        derechos básicos.
      </ul>
    </div>
  );
  const content2Izq = (
    <div>
      <ul className="ul-cajitas">
        {" "}
        La LGTBIfobia puede tener graves consecuencias, como el deterioro de la
        salud mental, estrés, ansiedad, depresión, suicidio, aislamiento social,
        dificultades para acceder a empleo y educación, y limitaciones en el
        disfrute pleno de derechos y libertades.
      </ul>
    </div>
  );
  const content3Izq = (
    <div>
      <ul className="ul-cajitas">
        En muchos países, se han promulgado leyes y políticas para proteger a
        las personas LGBTQ+ de la discriminación y la violencia basada en la
        orientación sexual o identidad de género. Sin embargo, la protección
        legal puede variar según el país y es importante seguir trabajando por
        la igualdad legal para todas las personas.
      </ul>
    </div>
  );

  //------------------------------Textos derecha--------------------------------
  const content0Dcha = (
    <div>
      <ul className="ul-cajitas">
        -Preparación de la víctima para minimizar los efectos de la experiencia
        y reacciones de aparición posterior.
        <br />
        -Intervención psicológica para incrementar la organización cognitiva de
        la víctima y su entrenamiento en el manejo de la ansiedad.
        <br />
        -Activación de recursos internos (estrategias de afrontamiento) y
        externos (apoyo social, laboral y familiar) para minimizar la
        victimización secundaria.
        <br />
        -Realización de actuaciones en el ámbito psicológico relacionadas con
        órdenes de protección.
      </ul>
    </div>
  );
  const content1Dcha = (
    <div>
      <ul className="ul-cajitas">
        Asesoramiento jurídico en procedimientos penales o en cualquier otra
        materia jurídica relacionada con la situación de la víctima. Información
        y asesoramiento sobre tramitación, gestión y elaboración de denuncias u
        otros dictámenes e informes jurídicos. Colaboración con órganos
        judiciales y representantes legales de las víctimas para evitar los
        efectos de la victimización secundaria. Asesoramiento y gestión de
        solicitud o petición de medidas de protección.
      </ul>
    </div>
  );
  const content2Dcha = (
    <div>
      <ul className="ul-cajitas">.........</ul>
    </div>
  );
  const content3Dcha = (
    <div>
      <ul className="ul-cajitas">...............</ul>
    </div>
  );

  return (
    <>
   
    {/* <img className="titulo2png0" src={Titulo2png} alt="" /> */}
     {/*--------------Cajita redes sociales--------------------------- */}
      <div className="redesSociales-preguntas">
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
            className="iconoContacto-twit"
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
            className="iconoContacto-insta"
            src={IconoInstagram}
            alt="instagram"
          />
        </a>
      </div>
      {/*--------------Cajita acceso directo--------------------------- */}
      <div className="cajas1-0-preguntas">
        <div className="whatssapp">
          <a
            className="main-text-number"
            href="https://api.whatsapp.com/send?phone=34623533035"
            target="_blank"
          >
            <img
              title="Chatea en directo"
              className="iconoWhatsapp"
              src={IconoWhatsapp}
              alt="IconoWhatsapp"
            ></img>
            <span className="AD">
              Acceso Directo <br /> 623 53 30 35
            </span>
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

       {/* -----------------------Caja de la izquierda-------------------------------- */}
      <div className="main-container-p">
        <div className="caja-contacto-preguntas">
          <div className="info-component">
            <h1 className="main-text">
              Preguntas frecuentes{" "}
            </h1>
            {/* <h2 className="main-text0 a parpadea-preguntas">
              Teléfono 623 533 035
            </h2> */}
            <div
              className="info-header0Izq"
              onClick={() => setExpanded0Izq(!expanded0Izq)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">¿Qué es la LGTBIfobia?</span>
                {expanded0Izq && <span>{content0Izq}</span>}
              </div>
            </div>

            <div
              className="info-header1Izq"
              onClick={() => setExpanded1Izq(!expanded1Izq)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">¿Cómo reconocer LGTBIfobia?</span>
                {expanded1Izq && <span>{content1Izq}</span>}
              </div>
            </div>

            <div
              className="info-header2Izq"
              onClick={() => setLlegarExpandedIzq(!llegarExpandedIzq)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">
                  ¿Qué consecuencias tiene la LGTBIfobia?
                </span>
                {llegarExpandedIzq && <span>{content2Izq}</span>}
              </div>
            </div>

            <div
              className="info-header3Izq"
              onClick={() => setHorarioExpandedIzq(!horarioExpandedIzq)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">
                  ¿Existen leyes que protejan de la LGTBIfobia?
                </span>
                {horarioExpandedIzq && <span>{content3Izq}</span>}
              </div>
            </div>
            <a className="main-text" href="/">
              <p title="Ir a..." className="p-cita-preguntaIzq">
                Volver
              </p>
            </a>
          </div>
        </div>

        {/* <div className="caja-contacto-preguntas"> */}
          {/* <div className="info-component"> */}
            {/* <h1 className="main-text">
              Nuestros servicios
              <br />
              Psicológico y Jurídico
            </h1> */}
            {/* <h2 className="main-text0 a parpadea-preguntas">
              Teléfono 623 533 035
            </h2> */}
            {/* -----------------------Caja de la derecha-------------------------------- */}
            {/* <div
              className="info-header0Dcha"
              onClick={() => setExpanded0Dcha(!expanded0Dcha)}>
              <div className="direccion-preguntas">
                <span className="contacto">Asistencia y apoyo Psicológico</span>

                {expanded0Dcha && <span>{content0Dcha}</span>}
              </div>
            </div> */}
            {/* <div
              className="info-header1Dcha"
              onClick={() => setExpanded1Dcha(!expanded1Dcha)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">Asesoramiento y apoyo Jurídico</span>

                {expanded1Dcha && <span>{content1Dcha}</span>}
              </div>
            </div> */}

            {/* <div
              className="info-header2Dcha"
              onClick={() => setLlegarExpandedDcha(!llegarExpandedDcha)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">¿Qué es la LGTBIfobia?</span>

                {llegarExpandedDcha && <span>{content2Dcha}</span>}
              </div>
            </div> */}

            {/* <div
              className="info-header3Dcha"
              onClick={() => setHorarioExpandedDcha(!horarioExpandedDcha)}
            >
              <div className="direccion-preguntas">
                <span className="contacto">¿Qué es la LGTBIfobia?</span>
                {horarioExpandedDcha && <span>{content3Dcha}</span>}
              </div>
            </div> */}
            {/* <a className="main-text" href="/modalCitas">
              <p title="Ir a..." className="p-cita-preguntaDcha">
                Cita Previa
              </p>
            </a> */}
          {/* </div> */}
        {/* </div> */}
      </div>
      <Footer/>
    </>
  );
};
export default PreguntasFrecuentes;
