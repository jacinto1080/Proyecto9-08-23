// import { Link } from "react-router-dom";
// import Icono from "../icono-image/logo-centro.png";
// import { useState } from "react";
// import "../navBar/navBar.css";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       <div className="navbar">
//         <Link
//           className="imgNB "
//           to="https://imaginabienestar.com/"
//           target="_blank"
//         >
//           <img
//             title="Ir a ImaginaBienestar"
//             className="imgNB"
//             src={Icono}
//             alt="icono-imaginaB"
//           />
//         </Link>
//         <div className={`menu ${isMenuOpen && "open"}`}></div>
//         <div
//           className={`hamburguer ${isMenuOpen && "open"}`}
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span>
//             <Link className="a" to="/modalCitas">
//               Acceso a <br /> Cita previa
//             </Link>
//           </span>
//           <span>
//             <Link className="a" to="/">
//               Página principal <br /> Información
//             </Link>
//           </span>
//           <span>
//             <a
//               href="https://www.policia.es/_es/denuncias.php"
//               className="a"
//               target="_blank"
//             >
//               Policía Nacional <br /> Denuncias
//             </a>
//           </span>
//         </div>
//       </div>
//     </>
//   );
// };
// export default NavBar;
