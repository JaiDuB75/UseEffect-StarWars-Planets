import React, {useEffect, useState} from "react";
import ListPlanets from "./ListPlanets";

function App() {

  const [planets, setPlanets] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/planets/1/")
    .then((response) => response.json())
    .then(setPlanets)
    .catch((error) => {
      console.log(error); 
    })
  }, []);

  return (
    <>
      <h1>Hello</h1>
      {planets.name}
      <ListPlanets />
    </>
  );
}

export default App;
