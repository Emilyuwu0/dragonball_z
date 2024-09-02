import React, { useEffect, useState } from "react";
import "./index.css";
import TitleUi from "../../Ui/Title/Title";

export default function Trans() {
  const [dataSaya, setDataSaya] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?race=God&page=1&limit=2")
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="div-father">
      <div className="div-title">
             <TitleUi titleUi={"Razas"} />
      </div>
 
      <div className="card">
      {dataSaya.map((item) => (
        <p
          key={item.id}
          style={{
            backgroundImage: `url(${item.image}), url(../../../../../assets/bg-race.jpg)`,
            backgroundSize: "cover",
          }}
        >
          <span>{item.name}</span>
        </p>
      ))}
    </div>
       <a className="redirect-button">Ver más.</a>
   
    </div>
  );
}
