import React, { useState, useEffect, memo } from "react";
import "./index.css";
import "../../../styles/Generic.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CharacterCard = memo(({ character }) => {
  return (
    <motion.div
      animate={{
        x: 0,
        y: -4,
        scale: 0.6,
        rotate: 0,
      }}
    >
      <div class=" item-pj-card">
        <div className="item-one-pj">
        <span className="title-pj-data">{character.name}</span>
        <span className=" div-info-pj-data description-pj-data">
              {character.ki}
              <br />
              {character.race}
         
            </span>
        </div>
        <div className="info-name-pj">
          
          <div className="main-content-img">
          <img
            src={character.image}
            alt={character.name}
            className="image-card-pj"
            loading="lazy"
          />
            
          </div>
        </div>
        {/*   <div class="main-content">
          <img
            src={character.image}
            alt={character.name}
            className="image-card-pj"
            loading="lazy"
          />
        </div>
        <div class="footer">
          <span className="sub-title">{character.ki} </span>
          {character.name}
        </div>*/}
      </div>
    </motion.div>
  );
});

const TabContent = memo(({ data }) => {
  return (
    <div className="parent-divs-characters">
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
});

const Tab = memo(({ active, onClick, data }) => {
  return (
    <div className="card-tab">
      <a onClick={onClick} className={active ? "active" : ""}>
        {data.map((character) => (
          <div key={character.id}>
            <div className="display-flex-card">
              <div className="home-experts_grid-number">{character.id}</div>
              <h2>{character.name}</h2>
            </div>
            <p className="description-pj ">{character.description}</p>
          </div>
        ))}
      </a>
    </div>
  );
});

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const getTabData = (tabIndex) => {
    const start = (tabIndex - 1) * 1;
    const end = start + 1;
    return data.slice(start, end);
  };

  return (
    <div className="pj-parents">
      <div className="framer-blur-pj"></div>
      <div className="tabs-pj">
        <div className="tabs">
          {" "}
          <span className="title-head-section-centered center-text">
            {" "}
            Personajes{" "}
          </span>
          <div>
            <h1 className="title-gradient  center-text  ">
              Conoce a fondo todos
              <br /> los
              <span className="highlight text-degrade"> personajes</span>
            </h1>
            <p className="subtitle text-trans-description ">
              Aparecen personajes que van desde guerreros extraterrestres hasta
              dioses y seres cósmicos, <br />
              en un universo lleno de batallas épicas, humor y lecciones de
              superación.
            </p>
          </div>
          <div className="parents">
            <div className="div-right">
              <div className="tabs-info">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  ["tab1", "tab2", "tab3", "tab4"].map((tab, index) =>
                    activeTab === tab ? (
                      <TabContent key={tab} data={getTabData(index + 2)} />
                    ) : null
                  )
                )}
              </div>
            </div>
            <div className="div-left">
              <div className="tabs-container-pj">
                {["tab1", "tab2", "tab3", "tab4"].map((tab, index) => (
                  <Tab
                    key={tab}
                    active={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                    data={getTabData(index + 2)}
                  />
                ))}
                <Link to="/pj" className="button-colors width-button-redirect">
                  Necesito conocer más →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
