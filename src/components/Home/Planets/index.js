import React from "react";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
export default function Planets() {
  return (
    <div className="parent-divs-planets ">
      <div className="one-div-planets ">
        <div class="main">
          <div class="randar-box">
            <input type="checkbox" checked class="randar-checkbox" />
            <div class="randar-top"></div>
            <div class="randar-top-body"></div>
            <div class="randar-content">
              <div class="rander-ball"></div>
              <div class="rander-ball"></div>
              <div class="rander-ball"></div>
              <div class="rander-ball"></div>
              <div class="rander-pos"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="two-div-planets">
        <div className="div-planets">
          <span className="title-generic">Planetas</span>
        <p>
          En el universo de "Dragon Ball", los planetas juegan un papel crucial
          en la narrativa y el desarrollo de los personajes. La serie, creada
          por Akira Toriyama, presenta una variedad de mundos, cada uno con sus
          propias características, habitantes y culturas.
        </p>
        <a  className="margin-top-min" href="#">Ver todos los planetas</a>
        </div>
        
      </div>
    </div>
  );
}
