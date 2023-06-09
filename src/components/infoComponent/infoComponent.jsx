import React, { useState } from 'react';
import IconoMas from "../icono-image/iconMas.png"
import IconoSilla from "../icono-image/icono-silla-blanco.png"
import IconoEdificio from "../icono-image/icono-edificio.png"
import IconoTransporte from "../icono-image/icono-transporte.png"
import IconoReloj from "../icono-image/icono-reloj.png"
import IconoCerrar from "../icono-image/IconoCerrar.png"
import "./infoComponent.css";

const InfoComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [llegarExpanded, setLlegarExpanded] = useState(false);
  const [horarioExpanded, setHorarioExpanded] = useState(false);
  const content1 = (
    <div >      
        <ul className='ul-cajitas'>
        Avda. Albufera 321 plta. 2-12. 
          <br /> B.º Distrito Palomeras Sureste <br /> Puente Vallecas.
          <br />Código postal 28031 Madrid.
        </ul>   
    </div>
  );
  const content2 = (
    <div >      
        <ul className='ul-cajitas'>    
          Transporte más próximo Metro: <br /> Sierra de
          Guadalupe y Miguel Hernández (Línea 1). <br /> Bus: 58, 103, 142, 143 y N25.
          Cercanías: <br />  Vallecas (Líneas C2 y C7).
        </ul>   
    </div>
  );
  const content3 = (
    <div >      
        <ul className='ul-cajitas'>    
          Lunes de 11:30h a 17:30h. <br /> Martes de 15:30 a 20:30h. <br />  Miércoles de
          16 a 21h. <br />  Jueves de 17 a 22h. <br />  Viernes, sábado y domingo <br />  de 9:30 a
          14:30h.
        </ul>   
    </div>
  );
  return (
    <>
      <div className="caja-Contacto">
        <div className="info-component">
          <h1 className="main-text">Datos de localización y contacto</h1>
          <h2 className="main-text0 a parpadea">Teléfono 623 533 035</h2>
          
          <div className="info-header" onClick={() => setExpanded(!expanded)}>
            <div className="direccion">
              <span className="contacto"> <img className='edificio' src={IconoEdificio}/> Dirección</span>
              <span>{expanded ? <img className='abrirCerrar1' 
              src={IconoCerrar}/> : <img className='abrirCerrar1' src={IconoMas}/> }</span>
              {expanded && <span>{content1}</span>}
            </div>
          </div>  
          <div className="info-header" onClick={() => setLlegarExpanded(!llegarExpanded)}>
            <div className="direccion">
              <span className="contacto"><img className='transporte' src={IconoTransporte}/>Cómo Llegar</span>
              <span>{llegarExpanded ? <img className='abrirCerrar2' 
              src={IconoCerrar}/> : <img className='abrirCerrar2' src={IconoMas}/> }</span>
              {llegarExpanded && <span>{content2}</span>}
            </div>
          </div>  
          <div className="info-header" onClick={() => setHorarioExpanded(!horarioExpanded)}>
            <div className="direccion">
              <span className="contacto"><img className='horario' src={IconoReloj}/>Horario</span>
              <span>{horarioExpanded ? <img className='abrirCerrar3' 
              src={IconoCerrar}/> : <img className='abrirCerrar3' src={IconoMas}/> }</span>
              {horarioExpanded && <span>{content3}</span>}
            </div>
          </div>  
          <a className="main-text" href="/modalCitas"><p className='p-cita'>Cita Previa</p></a>
        </div>
      </div>
    </>
  );
};
export default InfoComponent;











{/* <div className="caja-important-Info">
          <ul>
          
            <p className="main-text" >Instalación accesible para personas con movilidad reducida</p>
            <li>
              Dirección: <br /> Avenida Albufera 321, planta 2 - 12. 28031
              Madrid
              <br /> Barrio / Distrito Palomeras Sureste/ Puente Vallecas
            </li>
            <li>Teléfono 623 533 035</li>
            <li>
              Cómo llegar: <br /> Transporte más próximo Metro: <br /> Sierra de
              Guadalupe y Miguel Hernández (Línea 1) Bus: 58, 103, 142, 143 y
              N25 Cercanías: Vallecas (Líneas C2 y C7)
            </li>
            <li>
              Horario: <br />
              Lunes, de 11:30 a 17:30h Martes, de 15:30 a 20:30h Miércoles, de
              16 a 21h Jueves, de 17 a 22h Viernes, sábado y domingo, de 9:30 a
              14:30h
            </li>
          </ul>
        </div>  */}