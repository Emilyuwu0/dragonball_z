import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Series } from "./data-about";
import Akira from "../../assets/R.png";
import Footer from "../../components/Home/Footer/index";

import "./index.css";
import "../../styles/App.css";

export default function Index() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };
  return (
    <div className="about-parent">
      <span className="title-head-section center-text"> Historia </span>
      <h1 className="title-gradient-left titles-mobile center-text">
        Una Fusión de Mitología, <br /> Ciencia Ficción
        <span className="highlight text-degrade"> y Batallas Épicas</span>
      </h1>
      <div className="line-decoration"></div>
      <div className="framer-general">
        <h1 className="title-gradient-left titles-mobile center-text subtitle-info">
          El Comienzo
          <span className="highlight text-degrade"> de una Leyenda </span>
        </h1>
        <div className="framer-divs-center">
          <div className="framer-left">
            <span className="title-head-section "> Contexto </span>
            <p className="subtitle-about">
              <span className="font-white"> Dragon Ball </span>fue creado por
              Akira Toriyama en 1984 como un manga. La historia se inspira en la
              novela china Viaje al Oeste y sigue a Goku, un niño con cola de
              mono que tiene habilidades extraordinarias. Goku fue criado en las
              montañas por su abuelo adoptivo, Gohan, quien le enseñó artes
              marciales.
              <br />
              <br />
              La trama comienza cuando Goku conoce a Bulma, una chica que busca
              las Esferas del Dragón, siete objetos mágicos que, al reunirse,
              convocan al dragón Shenron, capaz de conceder cualquier deseo. A
              partir de ahí, Goku vive muchas aventuras, enfrentándose a
              poderosos enemigos, haciendo nuevos amigos y entrenando para
              volverse cada vez más fuerte.
              <br />
              <br />
              Con el tiempo, la historia evoluciona hacia combates épicos y la
              exploración de otros planetas, mientras Goku descubre su origen
              extraterrestre como un Saiyajin, una raza de guerreros.
            </p>
          </div>
          <div>
            <img src={Akira} alt="Akira" className="img-about" />
          </div>
        </div>
      </div>{" "}
      {/*  Dragon ball */}
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max">
          <div className="div-left ">
            <span className="title-head-section "> 1986-1989</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Gokū, un niño con una cola de mono, en su aventura para encontrar
              las Esferas del Dragón junto a Bulma. Durante el camino, Gokū
              entrena en artes marciales, participa en torneos y enfrenta a
              villanos como el Emperador Pilaf y Piccolo. La serie mezcla
              acción, humor y aventuras.
            </p>
          </div>
          <div className="div-right padding-min">
            <div className="carousel-container">
              <motion.div
                className="carousel-wrapper {"
                initial={{ y: 0 }}
                animate={{ y: ["0%", "-100%"] }} // Movimiento continuo
                transition={{
                  ease: "linear",
                  duration: 10, // Duración larga para un movimiento lento
                  repeat: Infinity, // Repetir infinitamente
                }}
              >
                {[...Series, ...Series]
                  .filter((item) => item.saga === "Dragon Ball")
                  .map((item) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="carousel-item-wrapper"
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleClick(item)}
                    >
                      <p className="number-of-saga">{item.id}</p>
                      <p className="title-of-saga">{item.title}</p>
                    </motion.div>
                  ))}
              </motion.div>

              <AnimatePresence>
                <motion.div onClick={(e) => e.stopPropagation()}>
                  {selectedItem && (
                    <div className="modal-overlay" onClick={closeModal}>
                      <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <p className="title-of-saga">{selectedItem.title}</p>
                        <p className="subtitle-about number-of-saga margin-bottom-min">
                          {selectedItem.description}
                        </p>
                        <button onClick={closeModal}>Cerrar</button>
                      </div>
                    </div>
                  )}{" "}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Dragon ball Z */}
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max">
          <div className="div-left ">
            <div class="parent-cards-divs">
              {" "}
              {Series.filter((item) => item.saga === "Dragon Ball Z").map(
                (item) => (
                  <div class="div1">
                    <div class="card-id567">
                      {/*   <svg
                        shape-rendering="crispEdges"
                        viewBox="0 -0.5 29 29"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0h7M8 0h2M14 0h1M16 0h5M22 0h7M0 1h1M6 1h1M13 1h1M17 1h2M22 1h1M28 1h1M0 2h1M2 2h3M6 2h1M8 2h1M11 2h4M18 2h1M20 2h1M22 2h1M24 2h3M28 2h1M0 3h1M2 3h3M6 3h1M8 3h2M11 3h1M13 3h1M15 3h5M22 3h1M24 3h3M28 3h1M0 4h1M2 4h3M6 4h1M8 4h4M13 4h1M15 4h1M19 4h1M22 4h1M24 4h3M28 4h1M0 5h1M6 5h1M9 5h1M12 5h2M17 5h4M22 5h1M28 5h1M0 6h7M8 6h1M10 6h1M12 6h1M14 6h1M16 6h1M18 6h1M20 6h1M22 6h7M9 7h1M11 7h1M15 7h6M0 8h4M6 8h1M8 8h1M13 8h2M17 8h3M21 8h1M24 8h3M28 8h1M2 9h1M4 9h2M7 9h1M9 9h1M14 9h1M16 9h1M19 9h2M22 9h3M28 9h1M0 10h5M6 10h1M8 10h1M13 10h1M16 10h1M18 10h1M20 10h1M22 10h3M26 10h2M1 11h1M3 11h2M7 11h1M11 11h4M16 11h1M18 11h1M20 11h5M28 11h1M1 12h3M5 12h2M9 12h1M11 12h1M13 12h5M19 12h1M25 12h2M0 13h2M3 13h3M8 13h1M10 13h2M14 13h1M16 13h2M19 13h2M22 13h2M26 13h3M0 14h1M2 14h1M4 14h3M9 14h2M12 14h1M14 14h1M16 14h1M19 14h3M23 14h2M26 14h3M0 15h2M3 15h2M8 15h1M12 15h1M14 15h3M20 15h1M22 15h3M27 15h1M0 16h1M2 16h3M6 16h1M10 16h2M18 16h1M20 16h2M24 16h2M27 16h1M1 17h2M4 17h1M7 17h3M12 17h1M14 17h2M18 17h1M20 17h2M23 17h1M25 17h3M0 18h1M3 18h1M6 18h1M8 18h5M15 18h2M23 18h1M26 18h1M2 19h4M12 19h1M14 19h1M16 19h2M19 19h3M26 19h1M1 20h1M3 20h1M6 20h7M14 20h2M17 20h10M8 21h3M12 21h1M18 21h1M20 21h1M24 21h5M0 22h7M9 22h6M19 22h2M22 22h1M24 22h2M27 22h1M0 23h1M6 23h1M9 23h1M13 23h3M18 23h1M20 23h1M24 23h2M27 23h1M0 24h1M2 24h3M6 24h1M10 24h1M12 24h1M14 24h4M20 24h5M26 24h3M0 25h1M2 25h3M6 25h1M8 25h1M11 25h2M15 25h2M19 25h3M24 25h2M28 25h1M0 26h1M2 26h3M6 26h1M8 26h1M10 26h2M13 26h1M21 26h1M23 26h1M26 26h1M28 26h1M0 27h1M6 27h1M8 27h1M11 27h1M14 27h1M16 27h1M18 27h3M23 27h1M25 27h1M27 27h1M0 28h7M8 28h1M14 28h3M19 28h2M25 28h1M27 28h1"
                          stroke="#000000"
                        ></path>
                      </svg> */}

                      <div class="prompt-id567">
                        <div class="token-container">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            class="creator-points"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784 14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701 3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476 19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091 12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466 16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402 15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864 19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528 16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68 20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <div class="blurry-splash"></div>
                        <p>
                          {item.id}
                          <br />
                          <span class="bold-567"> {item.title}</span>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* */}
          </div>
          <div className="div-right padding-min">
            <span className="title-head-section "> 1989-1996</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball Z</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Sigue las aventuras de Gokū y los Guerreros Z mientras defienden
              la Tierra de poderosos enemigos, como los Saiyajins, Freezer, los
              Androides, Cell y Majin Buu. A lo largo de la serie, los
              personajes enfrentan batallas épicas, alcanzan nuevas
              transformaciones como el Super Saiyajin, y exploran otros planetas
              y dimensiones, siempre luchando para proteger al universo.
            </p>
          </div>
        </div>
      </div>
      {/* Dragon ball GT */}
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max">
          <div className=" ">
            <span className="title-head-section center-text"> 1996-1997</span>
            <h1 className="title-gradient-left titles-mobile center-text margin-bottom-min">
              Dragon
              <span className="highlight text-degrade"> Ball GT</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min center-text margin-top-min">
              Sigue las aventuras de Gokū y los Guerreros Z mientras defienden
              la Tierra de poderosos enemigos, como los Saiyajins, Freezer, los
              Androides, Cell y Majin Buu. A lo largo de la serie, los
              personajes enfrentan batallas épicas, alcanzan nuevas
              transformaciones como el Super Saiyajin, y exploran otros planetas
              y dimensiones, siempre luchando para proteger al universo.
            </p>
          </div>
          <div className="div-cards-gt padding-min">
            {Series.filter((item) => item.saga === "Dragon Ball GT").map(
              (item) => (
                <div class="notification">
                  <div class="notiglow"></div>
                  <div class="notiborderglow"></div>
                  <div class="notititle">{item.title}</div>
                  <div class="notibody">Ver mas</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Dragon ball Super */}
      <div className="parents" id="about">
        <div className="content-parents border-div padding-max">
          <div className="div-left ">
            <div class="wrapper-super ">
              <div class="card-div-super">
          
                <section class="bottom">
                  <ul class="users">
                    {" "}
                    {Series.filter(
                      (item) => item.saga === "Dragon Ball Super"
                    ).map((item) => (
                      <li class="user">
                        <span class="user-name">{item.title}</span>
                        <span class="user-occupation"># - {item.id}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
          <div className="div-right padding-min">
            <span className="title-head-section ">2015-2018</span>
            <h1 className="title-gradient-left titles-mobile">
              Dragon
              <span className="highlight text-degrade"> Ball Super</span>
            </h1>
            <p className="button-spacing subtitle-about margin-bottom-min ">
              Tras la derrota de Majin Buu. La serie introduce nuevos enemigos y
              aliados, como Bills, el Dios de la Destrucción, y Goku Black, un
              misterioso villano. Gokū y Vegeta alcanzan nuevas
              transformaciones, como el Super Saiyajin Blue y el Ultra Instinto.
              Además, participan en el Torneo del Poder, donde luchan por la
              supervivencia de su universo contra los mejores guerreros de otros
              universos.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
