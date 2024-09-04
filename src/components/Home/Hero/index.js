import React from "react";
import ArrowDown from "../../../assets/arrow.png";

import "./index.css"
export default function HeroIndex() {

    const header = [
        {
          id: 1,
          title: "Inicio",
          href: "#about",
        },
        {
          id: 2,
          title: " Personajes",
          href: "#personajes",
        },
        {
          id: 3,
          title: " Razas",
          href: "#razas",
        },
        {
          id: 4,
          title: " Planetas",
          href: "#planetas",
        },
      ];
  return (
    <div>
      <div className="banner-hero">
        <div className="header-content">
          {header.map((item) => (
            <a key={item.id}>{item.title}</a>
          ))}
        </div>
        <span className="title-hero">
          Dragon
          <br />
          Ball
        </span>
      </div>
      <div className="btn-down">
        <img src={ArrowDown} width={20} alt="arrow" />
      </div>
    </div>
  );
}
