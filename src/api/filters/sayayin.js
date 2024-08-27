import { useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import "./index.css";
import "../../styles/App.css";
export default function Sayayin() {
  const [dataSaya, setDataSaya] = useState([]);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters?page=1&limit=15")
      .then((response) => response.json())
      .then((data) => {
        setDataSaya(data.items);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div>
      <span className="title-generic center-text">Personajes Saiyan</span>

      <div className="container">
        {dataSaya
          .filter((item) => item.race === "Saiyan")
          .map((item) => (
            <div class="card">
              <svg
               fill="url(#paint0_linear_103_640)"
                viewBox="0 0 342 175"
                height="250"
                width="380"
                xmlns="http://www.w3.org/2000/svg"
                class="background"
              >
                <path
                  fill="#122040"
                  d="M0 66.4396C0 31.6455 0 14.2484 11.326 5.24044C22.6519 -3.76754 39.6026 0.147978 73.5041 7.97901L307.903 62.1238C324.259 65.9018 332.436 67.7909 337.218 73.8031C342 79.8154 342 88.2086 342 104.995V131C342 151.742 342 162.113 335.556 168.556C329.113 175 318.742 175 298 175H44C23.2582 175 12.8873 175 6.44365 168.556C0 162.113 0 151.742 0 131V66.4396Z"
                ></path>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="128"
                    x2="354.142"
                    y1="128"
                    x1="0"
                    id="paint0_linear_103_640"
                  >
                    <stop stop-color="#5936B4"></stop>
                    <stop stop-color="#362A84" offset="1"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <img src={item.image} alt={item.name} className="image-card" />
              <div key={item.id}>
                {/*   */}
                <p class="title-cards main-text">{item.name}</p>

                <span className="subtitle-cards">{item.race}</span>

                <div class="info">
                  <div class="info-left">
                    <p class="text-gray">Ki: {item.ki}</p>
                    <p>Max Ki: {item.maxKi}</p>
                  </div>
                  <p class="info-right"> {item.gender}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
