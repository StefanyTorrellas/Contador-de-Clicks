import React from "react";
import "../hojas-de-estilo/Logo.css";

function Logo({ freeCodeCampLogo }) {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        className="freecodecamp-logo"
        src={freeCodeCampLogo}
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
}
export default Logo;
