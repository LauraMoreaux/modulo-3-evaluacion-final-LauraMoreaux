import React, { useEffect, useState } from 'react';
import '../stylesheets/_index.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Img1 from '../images/rick1.jpg';
import getDatafromApi from '../services/getDatafromApi';

const App = () => {
  const [listCharacters, setCharacters] = useState([]);

  useEffect(() => {
    getDatafromApi().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  console.log(listCharacters);

  return (
    <div className='App'>
      <header className='header'>
        <div className='wrapper'>
          <div className='logo-box'>
            <img src={Img1} alt='Rick and Morty Logo' />
          </div>
          <h1>Rick and Morty App</h1>
        </div>
        <Filters />
      </header>
      <main className='main'>
        <CharacterList characters={listCharacters} />
      </main>
      <CharacterDetail />
    </div>
  );
};

export default App;
