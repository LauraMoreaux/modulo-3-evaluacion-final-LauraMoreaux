import React, { useEffect, useState } from 'react';
import '../stylesheets/_index.scss';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Img1 from '../images/rick1.jpg';
import getDatafromApi from '../services/getDatafromApi';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  const [listCharacters, setCharacters] = useState([]);
  const [filteredCharacter, setFiltered] = useState('');

  useEffect(() => {
    getDatafromApi().then((characters) => {
      setCharacters(characters);
    });
  }, []);

  const handleFilter = (data) => {
    setFiltered(data);
  };

  const renderFiltered = () => {
    return listCharacters.filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filteredCharacter.toLowerCase());
    });
  };

  const renderDetail = (props) => {
    console.log(props);
    const routeId = props.match.params.id;
    const detailedCharacter = listCharacters.find(
      (character) => character.id === routeId
    );
    if (detailedCharacter) {
      return (
        <CharacterDetail
          name={detailedCharacter.name}
          id={detailedCharacter.id}
          image={detailedCharacter.image}
          specie={detailedCharacter.species}
          status={detailedCharacter.status}
          origin={detailedCharacter.origin.name}
          episode={detailedCharacter.episode.length}
        />
      );
    }
  };

  return (
    <div className='App'>
      <header className='header'>
        <div className='wrapper'>
          <div className='logo-box'>
            <img src={Img1} alt='Rick and Morty Logo' />
          </div>
          <h1>Rick and Morty App</h1>
        </div>
        <Filters
          handleFilter={handleFilter}
          filteredCharacter={filteredCharacter}
        />
      </header>
      <Route exact path='/'>
        <main className='main'>
          <CharacterList characters={renderFiltered()} />
        </main>
      </Route>
      <Switch>
        <Route exact path='/character/:id' render={renderDetail} />
      </Switch>
    </div>
  );
};

export default App;
