import React, { useEffect, useState } from "react";

import TitleUi from "../../Ui/Title/Title";
import { Link } from "react-router-dom";
import "./index.css";
import "../../../styles/Generic.css";
import Button from "../../Ui/Button/Button";
export default function Trans() {
  const [dataSaya, setDataSaya] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    fetch(
      "https://dragonball-api.com/api/characters?race=Saiyan&page=1&limit=4"
    )
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="div-father">
      <h1 className="title-gradient">
        {" "}
        Descubre las diferentes <span className="text-degrade">razas</span>{" "}
      </h1>
      <p className="text-trans-description">
        Las distintas razas enriquecen el universo con su diversidad de poderes
        y culturas.
      </p>
      <div className="carousel">
        <div className="carousel-inner">
          <>
            {dataSaya.map((item) => (
              <div className="carousel-item">
                <div className="card">
                  <div className="card-back">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="image-card"
                    />
                    <p className="center-text name-card-trans">{item.name}</p>
                    <span className="ki-text">{item.ki}</span>
                    <span className="race-text">{item.race}</span>
                  </div>
                </div>{" "}
              </div>
            ))}
            {/*  <img src="/api/placeholder/50/50" alt="Novartis logo" class="logo"/>*/}
          </>
        </div>
      </div>
      <Link to="/personajes" className="view-more">
        Ver mas →
      </Link>
    </div>
  );
}
