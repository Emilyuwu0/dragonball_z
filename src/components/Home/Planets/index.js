import React from "react";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
import { Link } from "react-router-dom";
export default function Planets() {
  return (
    <div className="margin-planets-top ">
      <div className="parents ">
        <div className="filter-bg-shadow"></div>
        <div className="content-parents border-div padding-min ">
          <div className="div-left padding-min  ">
            <span className="title-head-section"> Planetas </span>

            <h1 className="title-gradient-left titles-mobile">
              Diversidad de <span className="text-degrade ">planetas</span>
            </h1>
            <p className="subtitle-about ">
              En el universo de "Dragon Ball", los planetas juegan un papel
              crucial en la narrativa y el desarrollo de los personajes. La
              serie, creada por Akira Toriyama, presenta una variedad de mundos,
              cada uno con sus propias características, habitantes y culturas.
            </p>
            <Link className="button-colors width-button-redirect " href="#">
              Ver todos los planetas →
            </Link>
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
              <p className="dragon-title">
                {" "}
                Radar del Dragón{" "}
                <span className="title-color-primary">( ドラゴンレーダー)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
