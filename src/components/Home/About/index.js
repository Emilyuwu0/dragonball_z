import React from "react";
import Shenlong from "../../../assets/shenlong.webp";

import Button from "../../Ui/Button/Button";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
import "../../../styles/App.css";
export default function index() {
  return (
    <div className="parent">
      <div className="div1">
        {" "}
        <img src={Shenlong} alt="shenlong" className="shenlong" />
      </div>
      <div className="div2">
        {" "}
        <div className="about">
          <span className="title-generic">
            <TitleUi titleUi={"Dragon Ball"} />
          </span>
          <p className="button-spacing" >
            Es una popular serie de manga y anime creada por Akira Toriyama. La
            historia sigue las aventuras de Goku, un guerrero con habilidades
            sobrehumanas, mientras busca las Esferas del Dragón, objetos mágicos
            que pueden invocar a un dragón que concede deseos. A lo largo de la
            serie, Goku entrena y se enfrenta a poderosos enemigos, hace amigos
            y descubre su origen como Saiyajin. La trama combina acción, comedia
            y elementos de artes marciales, y ha tenido un gran impacto en la
            cultura pop, dando lugar a múltiples secuelas, películas y
            videojuegos.
          </p>
          <Button titleButton={"Quiero saber más!"} />
        </div>
      </div>
    </div>
  );
}
