import React from "react";
import "../hojas-de-estilo/Boton.css";

function Boton({ texto, esBottonDeClic, manejarClic }) {
  return (
    <button
      className={esBottonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}
export default Boton;
