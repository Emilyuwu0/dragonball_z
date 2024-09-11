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
    fetch("https://dragonball-api.com/api/characters?race=God&page=1&limit=4")
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="div-father">
      <div className="trans-div">
        <div className="content-trans-div">
          <div className="div-trans">
            <div className="div-title">
          

              <div class="book">
                {dataSaya.map((item) => (
                  <>
                    <div className="card-back">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="image-card"
                      />
                      <p className="center-text name-card-trans">{item.name}</p>
                    </div>
                  </>
                ))}{" "}
                <div class="cover"></div>
              </div>
            </div>
          </div>

          <div className="div-trans-2 ">    <TitleUi titleUi={"Razas"} />
            <p className="text-trans-description">
              En Dragon Ball, las distintas razas enriquecen el universo con su
              diversidad de poderes y culturas, pero una de las más fascinantes
              es la raza de los dioses, quienes están por encima de todos en la
              jerarquía cósmica. Los dioses de la destrucción, como Bills
              (Beerus), son deidades encargadas de mantener el equilibrio del
              universo, destruyendo planetas o civilizaciones cuando es
              necesario. Aunque poseen un poder abrumador, su rol no es ser
              malignos, sino preservar el orden natural de las cosas. Los
              acompañan los ángeles, seres aún más poderosos y sabios, como
              Whis, quienes no solo sirven como mentores, sino también como
              guías de los dioses.
            </p>
            
            <Link>
            Vamos allí
           {/* <Button titleButton={"Vamos allí"} /> */}
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
