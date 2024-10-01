import { useState, useEffect } from "react";

export default function ApiDBZCharacters() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://dragonball-api.com/api/characters")
        .then((response) => response.json())
        .then((data) => setData(data.items)); // Guardar los datos en el estado local
    }, []);

    return (
      <div>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
      </div>
    )
}




export async function getData() {
  const url = "https://dragonball-api.com/api/characters";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json; // Retornamos los datos para usarlos en otro componente
  } catch (error) {
    console.error(error.message);
    return null; // Devolvemos null si ocurre un error
  }
}
