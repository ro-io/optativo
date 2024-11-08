import React from "react";
import logo from "../assets/Ellipse.svg";
import logo2 from "../assets/rectangulo.svg";
import "./Encabezado.css";

const Encabezado = ({ lugar, def }) => {
  return (
    <div>
      <div className="encabezado">
        <img className="imagen" src={logo} alt="" />
        <img src={logo2} alt="" />
        <div className="tipo">
          <span> {lugar}</span>
        </div>
      </div>
      <p>
        <span className="descripciones">{def}</span>
      </p>
    </div>
  );
};

export default Encabezado;
