import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import Logo from "./componentes/Logo";
import freeCodeCampLogo from "./imagenes/freeCodeCamp-logo.png";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <Logo freeCodeCampLogo={freeCodeCampLogo} />
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton texto="Clic" esBottonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBottonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
