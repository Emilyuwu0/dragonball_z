import React, { useEffect, useState } from "react";
import ApiDBZCharacters from "../../api/characters";
import { getData } from "../../api/characters";
import { screen } from '@testing-library/react';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(characters);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      console.log(data); // Verifica lo que devuelve
      if (data && Array.isArray(data.items)) {
        setCharacters(data.items); // Asegúrate de que sea un array
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {" "}
      {/*     {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))} */}
      <div className="about-parent">
        <span className="title-head-section center-text"> Personajes </span>
        {/* <h1 className="title-gradient-left titles-mobile center-text">
        Una Fusión de Mitología, <br /> Ciencia Ficción
        <span className="highlight text-degrade"> y Batallas Épicas</span>
      </h1> */}
        <div className="parents" id="about">
          <div className="content-parents border-div padding-max">
            <div className="div-left ">screen</div>
            <div className="div-right ">d</div>
          </div>
        </div>
      </div>
    </div>
  );
}
