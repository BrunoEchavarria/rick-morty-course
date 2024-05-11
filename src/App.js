import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './img/components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async() => {

    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results); 

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {/* cuando character tenga algo nos muestra esto y si no lo otro */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>{/*lo otro xd*/}
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home'/>
            <button onClick={reqApi} className='btn-search'>Buscar personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
