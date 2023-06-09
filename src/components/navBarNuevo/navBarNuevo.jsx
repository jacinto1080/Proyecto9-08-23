import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../../styles/navbarStyles";
import "./navBarNuevo.css";


function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open}>
      <h1 className="navBar">
        <div className="main-container-navbar">
        <div className="link-navbar">
        <a href="#">
          <Link
            onClick={handleClick}
            class="a"
            title="Ir a..."
            target="_blank"
            to="https://imaginabienestar.simplybook.it/v2/"
          >
            Cita previa
          </Link>
        </a>
        <a href="#">
          <Link onClick={handleClick} className="a" title="Ir a..." to="/">
            Página principal
          </Link>
        </a>
        </div>
        <div className="div-parpadea">
        <a href="#">
          <Link
            onClick={handleClick}
            className="a parpadea"
            title="Ir a..."
            target="_blank"
            to="https://www.policia.es/_es/denuncias.php"
          >
            Urgencias fuera de horario
          </Link>
        </a>
        </div>
        </div>
      </h1>
    </NavbarWrapper>
  );
}
export default Navbar;
