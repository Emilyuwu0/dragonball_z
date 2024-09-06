import React, { useState, useEffect } from "react";
import "./index.css";
import TitleUi from "../../Ui/Title/Title";

function CharacterCard({ character }) {
  return (
    <div className="tab-image-card">
      <div className="data-pj-card">
        <div className="data-div-pj">
          {" "}
          <div className="tab-title">{character.name}</div>
          <p className="sub-title">{character.ki}</p>
        </div>
        <div className="data-div-info">
          {" "}
          <img
            src={character.image}
            alt={character.name}
            className="image-card"
          />
        </div>
      </div>
      {/* <div >
        <span></span>
        <div >
       {" "}
          <div className="tab-title">{character.name}</div>
          <p className="sub-title">{character.ki}</p>
        </div>
      </div> */}
      {/* <
       */}
    </div>
  );
}

function TabContent({ data }) {
  return (
    <div className="parent-divs-characters">
      {data.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}

function Tab({ active, onClick, data }) {
  return (
    <a onClick={onClick} className={active ? "active" : ""}>
      <div className="card-tab">
        {data.map((character) => (
          <div key={character.id} className="div-tab">
            <img
              src={character.image}
              alt={character.name}
              className="img-tab"
            />
          </div>
        ))}
      </div>
    </a>
  );
}

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
      <div className="tabs-pj">
        <div className="tabs">
          <TitleUi titleUi={"Personajes"} />
          <div className="tabs-container-pj"> 
             {["tab1", "tab2", "tab3", "tab4"].map((tab, index) => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
              data={getTabData(index + 2)}
            />
          ))}
          <p>Ver más</p>
          </div>
         
        </div>
      </div>
      <div className="tabs-info">
        {" "}
        {loading && <div>Loading...</div>}
        {!loading &&
          ["tab1", "tab2", "tab3", "tab4"].map(
            (tab, index) =>
              activeTab === tab && (
                <TabContent key={tab} data={getTabData(index + 2)} />
              )
          )}
      </div>{" "}
    </div>
  );
}
