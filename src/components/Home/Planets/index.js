import React from "react";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
export default function Planets() {
  return (
    <div >
    <div className="parents ">
      <div className="content-parents border-div padding-min ">
      <div className="div-left padding-min  ">
      <h1 className="title-generic">Diversidad de <span className="text-degrade">planetas</span></h1>
        <p className="subtitle-about ">
          En el universo de "Dragon Ball", los planetas juegan un papel crucial
          en la narrativa y el desarrollo de los personajes. La serie, creada
          por Akira Toriyama, presenta una variedad de mundos, cada uno con sus
          propias características, habitantes y culturas.
        </p>
        <a  className="margin-top-min view-redirect " href="#">Ver todos los planetas →</a>
      </div>
      <div className="div-right">
        <div className="div-planets">
          <div className="main">
          <div className="randar-box">
            <input type="checkbox" checked className="randar-checkbox" />
            <div className="randar-top"></div>
            <div className="randar-top-body"></div>
            <div className="randar-content">
              <div className="rander-ball"></div>
              <div className="rander-ball"></div>
              <div className="rander-ball"></div>
              <div className="rander-ball"></div>
              <div className="rander-pos"></div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div></div>
  );
}
