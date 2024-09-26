import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Akira from "../assets/R.png";
/* 
import "./index.css"; */
import "../styles/App.css";
import { desc, title } from "framer-motion/client";

export default function Index() {
  const controls = useAnimation();

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
      </div>

      <div>
        Dragon Ball tiene varias sagas y películas, divididas entre sus
        diferentes series
      </div>
      {/*   <motion.div
        id="animate-me"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.9 }}
      >
        <div className="framer-blur"></div>
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max">
            <div className="div-left ">
              <span className="title-head-section "> Historia </span>
              <h1 className="title-gradient-left titles-mobile">
                Indaga en la
                <span className="highlight text-degrade"> información</span>
              </h1>
              <p className="button-spacing subtitle-about margin-bottom-min ">
                Es una popular serie de manga y anime creada por Akira Toriyama.
                La historia sigue las aventuras de Goku, un guerrero con
                habilidades sobrehumanas, mientras busca las Esferas del Dragón,
                objetos mágicos que pueden invocar a un dragón que concede
                deseos.
              </p>
        
            </div>
            <div className="div-right padding-min">
              <div className="card-into-about">
                <div className="div-flex-about">
               
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}

const Series = [
  {
    id: 1,
    saga: "Dragon Ball",
    title: "Saga del Gran Torneo de Artes Marciales:",
    description:
      "Gokū y sus amigos entrenan para participar en torneos de artes marciales.",
  },
  {
    id: 2,
    saga: "Dragon Ball",
    title: "Saga del Ejército Red Ribbon",
    description:
      "Gokū se enfrenta a una organización militar en busca de las Esferas del Dragón.",
  },
  {
    id: 3,
    saga: "Dragon Ball",
    title: "Saga de Piccolo Daimaō",
    description:
      "Aparece un nuevo villano, el Rey Demonio Piccolo, que amenaza la paz del mundo.",
  },
  {
    id: 4,
    saga: "Dragon Ball",
    title: "Saga de los Saiyajins",
    description:
      "Gokū descubre sus orígenes como Saiyajin mientras defiende la Tierra de otros guerreros de su raza.",
  },
  {
    id: 5,
    saga: "Dragon Ball Z",
    title: "Saga de Freezer",
    description:
      "Gokū y sus amigos viajan al planeta Namek, donde enfrentan a Freezer, uno de los villanos más poderosos.",
  },
  {
    id: 6,
    saga: "Dragon Ball Z",
    title: "Saga de Cell",
    description:
      "Un bioandroide llamado Cell amenaza el mundo, y Gohan se convierte en clave para derrotarlo.",
  },
  {
    id: 7,
    saga: "Dragon Ball Z",
    title: "Saga de Majin Buu",
    description:
      "La Tierra es atacada por Majin Buu, un ser mágico con un inmenso poder.",
  },
  {
    id: 8,
    saga: "Dragon Ball GT",
    title: "Saga de las Esferas del Dragón Oscuras",
    description:
      "Gokū, ahora un niño debido a un deseo, viaja por el universo buscando esferas oscuras.",
  },
  {
    id: 9,
    saga: "Dragon Ball GT",
    title: "Saga de Baby",
    description:
      "Gokū enfrenta a Baby, un villano que busca venganza contra los Saiyajins.",
  },
  {
    id: 10,
    saga: "Dragon Ball GT",
    title: "Saga de los Dragones Oscuros",
    description:
      "Dragones malignos emergen de las Esferas del Dragón, y Gokū debe detenerlos.",
  },
  {
    id: 11,
    saga: "Dragon Ball Super",
    title: "Saga de la Batalla de los Dioses",
    description: "Gokū enfrenta a Bills, el Dios de la Destrucción.",
  },
  {
    id: 12,
    saga: "Dragon Ball Super",
    title: "Saga del Torneo de Champa",
    description:
      "Un torneo entre los universos 6 y 7 se lleva a cabo con el destino de la Tierra en juego.",
  },
  {
    id: 13,
    saga: "Dragon Ball Super",
    title: "Saga de Goku Black",
    description:
      "Gokū se enfrenta a un villano que ha tomado su apariencia y amenaza a los universos.",
  },
  {
    id: 14,
    saga: "Dragon Ball Super",
    title: "Saga del Torneo del Poder",
    description:
      "Universos compiten en un torneo en el que la existencia misma está en juego.",
  },
];
const Movies = [
  {
    id: "1",
    title: "Dragon Ball",
    year: "(1986)",
    movie: "La Leyenda del Dragón Shenlong ",
    description:
      "Gokū y sus amigos deben evitar que el malvado Emperador Pilaf reúna las Esferas del Dragón y haga un deseo maligno.",
  },
  {
    id: "2",
    title: "Dragon Ball ",
    year: " (1987)",
    movie: "La Bella Durmiente en el Castillo del Mal",
    description:
      "Gokū y Krilin entrenan con el Maestro Roshi y deben rescatar a una bella durmiente para demostrar su valor. ",
  },
  {
    id: "3",
    title: "Dragon Ball ",
    year: "(1988)",
    movie: "Aventura Mística ",
    description:
      "Gokū y sus amigos participan en un torneo de artes marciales mientras intentan detener los planes de conspiración en un reino lejano.",
  },
  {
    id: "4",
    title: "Dragon Ball",
    year: "(1996)",
    movie: "El Camino hacia el Poder ",
    description:
      "Un reinicio de la serie original, combinando elementos de las primeras aventuras de Gokū, donde lucha contra el Ejército Red Ribbon.",
  },
  {
    id: "5",
    title: "Dragon Ball  Z",
    year: " (1989)",
    movie: "La Batalla Decisiva por la Tierra",
    description:
      "Gokū se enfrenta a Garlic Jr., quien desea venganza y busca las Esferas del Dragón para la inmortalidad.",
  },
  {
    id: "6",
    title: "Dragon Ball Z",
    year: " (1990)",
    movie: "El Hombre Más Fuerte del Mundo",
    description:
      "Un científico maligno, el Dr. Willow, trata de apoderarse del cuerpo de Gokū para cumplir sus ambiciones.",
  },
  {
    id: "7",
    title: "Dragon Ball Z",
    year: " (1990)",
    movie: "La Batalla de los Tres Saiyajin",
    description:
      "Gokū y Vegeta luchan contra Turles, un Saiyajin que ha sobrevivido y planea destruir la Tierra.",
  },
  {
    id: "8",
    title: "Dragon Ball Z",
    year: "(1991)",
    movie: " El Super Saiyajin Son Gokū ",
    description:
      "Gokū y sus amigos deben enfrentarse a Slug, un Namekiano que amenaza con usar las Esferas del Dragón para restaurar su juventud.",
  },
  {
    id: "9",
    title: "Dragon Ball Z",
    year: " (1991)",
    movie: "Los Guerreros Más Poderosos",
    description:
      "Cooler, el hermano de Freezer, busca vengar la muerte de su hermano y destruir la Tierra.",
  },
  {
    id: "10",
    title: "Dragon Ball Z",
    year: " (1992)",
    movie: "El Retorno de Cooler",
    description:
      "Cooler regresa, esta vez como un androide, y desafía a Gokū y Vegeta en el planeta Nuevo Namek.",
  },
  {
    id: "11",
    title: "Dragon Ball Z",
    year: "(1992)",
    movie: "Súper Android 13 ",
    description:
      "Tres androides son activados para acabar con Gokū, lo que lleva a una intensa batalla en el Ártico.",
  },
  {
    id: "12",
    title: "Dragon Ball Z",
    year: "(1993)",
    movie: "Broly, el Super Saiyajin Legendario ",
    description:
      "Gokū, Vegeta y los demás enfrentan a Broly, un Saiyajin extremadamente poderoso con un odio profundo hacia Gokū.",
  },
  {
    id: "13",
    title: "Dragon Ball Z",
    year: " (1994)",
    movie: "El Regreso de Broly",
    description:
      "Broly regresa para vengarse, enfrentándose nuevamente a Gohan y Goten en la Tierra.",
  },
  {
    id: "14",
    title: "Dragon Ball Z",
    year: "(1994)",
    movie: " El Combate Final (Bio-Broly) ",
    description:
      "Un clon de Broly es creado y amenaza con destruir todo lo que se cruce en su camino.",
  },
  {
    id: "15",
    title: "Dragon Ball Z",
    year: " (1995)",
    movie: "Fusión",
    description:
      "Gokū y Vegeta deben fusionarse para enfrentar a Janemba, un demonio que ha alterado la realidad.",
  },
  {
    id: "16",
    title: "Dragon Ball Z",
    year: "(1995)",
    movie: "El Ataque del Dragón ",
    description:
      "Gokū y los demás luchan contra el temible Hildegarn, un monstruo gigante que amenaza con destruir la Tierra",
  },
  {
    id: "17",
    title: "Dragon Ball Z",
    year: " (1993)",
    movie: "El Poder Invencible (Bojack Unbound)",
    description:
      "Durante un torneo, Bojack, un guerrero intergaláctico, escapa de su prisión y busca conquistar el mundo, obligando a Gohan a luchar.",
  },
  {
    id: "18",
    title: "Dragon Ball Super",
    year: "(2013)",
    movie: "La Batalla de los Dioses",
    description:
      "Gokū se enfrenta a Bills, el Dios de la Destrucción, quien busca destruir la Tierra a menos que encuentre un rival digno.",
  },
  { id: "19", title: "Dragon Ball Super", movie: "", description: "" },

  {
    id: "20",
    title: "Dragon Ball Super",
    year: " (2015)",
    movie: "La Resurrección de Freezer",
    description:
      "Freezer es resucitado y busca venganza contra Gokū y los Guerreros Z, alcanzando una nueva transformación, el Freezer Dorado",
  },
  {
    id: "21",
    title: "Dragon Ball Super",
    year: "(2018)",
    movie: "Broly ",
    description:
      "Broly, un Saiyajin exiliado, es encontrado por Freezer y llevado a la Tierra, donde Gokū y Vegeta deben enfrentarlo en una batalla épica.",
  },
  {
    id: "22",
    title: "Dragon Ball Super",
    year: " (2022)",
    movie: " Super Hero",
    description:
      "Los androides Gamma 1 y Gamma 2, creados por la Patrulla Roja, atacan a Gohan y Piccolo, quienes deben defender la Tierra una vez más.",
  },
  { id: "23", title: "Dragon Ball Z", year: "", movie: "", description: "" },
];
