import React from 'react';
import './App.css'


const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch("https://rickandmortyapi.com/api/character/").then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  const vivos = characterList.filter(
    (character) => character.status === "Alive"
  );
  
  return (
    <>
    <div id="api">
    {vivos.map((character) => (
        <div id="characters" key={character.id}>
          {/* <h2>id: {character.id}</h2>  */}
          <h2>{/*name:*/} {character.name}</h2>
          <h2>{/*status:*/} {character.status}</h2>
          <img id="characters-img" src={character.image}/>
          <h3>Origin: {character.origin.name}</h3>
        </div>
      ))}
    </div>
    </>
  )
};

export default App;

