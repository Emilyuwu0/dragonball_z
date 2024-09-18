import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hook/sizeScreen";
import Planets from "../Planets";
import "./index.css";
export default function HeroIndex() {
  const windowWidth = useWindowSize();
  const isMobile = windowWidth < 768;

  return (
    <div>
      {isMobile ? (
        <div className="banner-hero-mobile">
          <input type="checkbox" id="active" />
          <label for="active" class="menu-btn">
            <span></span>
          </label>
          <label for="active" class="close"></label>
          <div class="wrapper-mobile">
            <div className="menu-mobile">
              {header.map((item) => (
                <Link key={item.id} to={item.href} className="nav-menu-mobile">
                  <span className="item-nav"> {item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="banner-hero">
            <div className="header-content">
              <>
                {header.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="title-hero-link-a"
                  >
                    <span className="title-hero-link"> {item.title}</span>
                  </Link>
                ))}
              </>
            </div>
            <span className="title-hero">
              Dragon
              <br />
              Ball
            </span>
          </div>
          <div className="btn-down">
            {/*  <img src={ArrowDown} width={20} alt="arrow" /> */}
          </div>
        </>
      )}
    </div>
  );
}
const header = [
  {
    id: 1,
    title: "Inicio",
    href: "/about",
    view: <Planets />,
  },
  {
    id: 2,
    title: " Personajes",
    href: "/personajes",
    view: <Planets />,
  },
  {
    id: 3,
    title: " Razas",
    href: "/razas",
    view: <Planets />,
  },
  {
    id: 4,
    title: " Planetas",
    href: "/planetas",
    view: <Planets />,
  },
];
