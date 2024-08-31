import React, { useState, useEffect } from "react";
import "./index.css";
import TitleUi from "../../Ui/Title/Title";
const Tabs = () => {
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="parent-divs">
      <div className="one-div">
        {" "}
        <div className="tab-content">
          {loading && <div>Loading...</div>}
          {!loading && activeTab === "tab1" && (
            <div>
              {getTabData(2).map((character) => (
                <div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="image-card"
                  />
                  <div key={character.id} className="tab-title">
                    {" "}
                    {character.name}
                  </div>
                  <p className="sub-title"> {character.ki}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && activeTab === "tab2" && (
            <div>
              {getTabData(3).map((character) => (
                <div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="image-card"
                  />
                  <div key={character.id} className="tab-title">
                    {character.name}
                  </div>
                  <p className="sub-title"> {character.ki}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && activeTab === "tab3" && (
            <div>
              {getTabData(4).map((character) => (
                <div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="image-card"
                  />
                  <div key={character.id} className="tab-title">
                    {character.name}
                  </div>
                  <p className="sub-title"> {character.ki}</p>
                </div>
              ))}
            </div>
          )}
          {!loading && activeTab === "tab4" && (
            <div>
              {getTabData(5).map((character) => (
                <div>
                  <img
                    src={character.image}
                    alt={character.name}
                    className="image-card"
                  />
                  <div key={character.id} className="tab-title">
                    {character.name}
                  </div>
                  <p className="sub-title"> {character.ki}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="two-div">
        <div className="tabs">
          {" "}
          <TitleUi titleUi={"Personajes"} />
          <a
            onClick={() => handleTabChange("tab1")}
            className={activeTab === "tab1" ? "active" : ""}
          >
            {" "}
            {getTabData(1).map((character) => (
              <div className=" div-tab">
                <img
                  key={character.id}
                  src={character.image}
                  alt={character.name}
                  width={10}
                />
              </div>
            ))}
          </a>
          <a
            onClick={() => handleTabChange("tab2")}
            className={activeTab === "tab2" ? "active" : ""}
          >
          <div className=" div-tab"></div>
          </a>
          <a
            onClick={() => handleTabChange("tab3")}
            className={activeTab === "tab3" ? "active" : ""}
          >
              <div className=" div-tab"></div>
          </a>
          <a
            onClick={() => handleTabChange("tab4")}
            className={activeTab === "tab4" ? "active" : ""}
          >
              <div className=" div-tab"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
