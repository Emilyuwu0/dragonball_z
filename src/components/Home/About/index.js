import React, { useEffect } from "react";
import Shenlong from "../../../assets/R.png";
import { motion, useAnimation } from "framer-motion";

import Button from "../../Ui/Button/Button";
import TitleUi from "../../Ui/Title/Title";

import "./index.css";
import "../../../styles/App.css";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="about-parent">
      <motion.div
        id="animate-me"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <div className="parents" id="about">
          <div className="content-parents">
            <div className="div-left ">
            <h1 className="title-gradient-left">
             Indaga en la 
              <span className="highlight text-degrade"> información</span>
            </h1>
              <p className="button-spacing subtitle-about">
                Es una popular serie de manga y anime creada por Akira Toriyama.
                La historia sigue las aventuras de Goku, un guerrero con
                habilidades sobrehumanas, mientras busca las Esferas del Dragón,
                objetos mágicos que pueden invocar a un dragón que concede
                deseos. 
              </p>
              <Button titleButton={"Quiero saber más!"} />
            </div>
            <div className="div-right">
              {" "}
              <div className="about">

                
                <img src={Shenlong} alt="shenlong" className="shenlong" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
