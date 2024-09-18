import React, { useEffect } from "react";
import Shenlong from "../../../assets/R.png";
import { motion, useAnimation } from "framer-motion";

import Button from "../../Ui/Button/Button";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
import "../../../styles/App.css";
import { Link } from "react-router-dom";
import IncrementingNumber from "../../Ui/IncrementNumber";

export default function Index() {
  const controls = useAnimation();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById("animate-me");
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  };

  /*   useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  const dataInfo = [
    {
      id: 1,
      item: 6,
      title: "Series divididas.",
    },
    {
      id: 2,
      item: 20,
      title: "Sagas oficiales.",
    },
    {
      id: 3,
      item: 27,
      title: "Peliculas oficiales.",
    },
    {
      id: 4,
      item: 300,
      title: "Personajes aprox.",
    },
  ];

  return (
    <div className="about-parent">
      <div className="framer-blur"></div>
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max">
          <div className="div-left ">
            <span className="title-head-section"> Historia </span>
            <h1 className="title-gradient-left">
              Indaga en la
              <span className="highlight text-degrade"> información</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Es una popular serie de manga y anime creada por Akira Toriyama.
              La historia sigue las aventuras de Goku, un guerrero con
              habilidades sobrehumanas, mientras busca las Esferas del Dragón,
              objetos mágicos que pueden invocar a un dragón que concede deseos.
            </p>
            <Link className="view-redirect margin-top-min button-colors">
              Quiero saber más →
            </Link>
          </div>
          <div className="div-right">
            <div className="card-into-about">
              <div className="div-flex-about">
                {dataInfo.map((item) => (
                  <>
                    <div className="div-item " key={item.id}>
                      <span className="number-info">
                        <IncrementingNumber targetNumber={item.item} />
                        {/*  {item.item} */}
                      </span>
                      <div className="line-info"></div>
                      <span className="name-info-data subtitle-about">
                        {item.title}{" "}
                      </span>{" "}
                    </div>
                  </>
                ))}
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
