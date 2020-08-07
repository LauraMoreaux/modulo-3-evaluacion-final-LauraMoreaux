import React from 'react';
import '../stylesheets/App.css';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <div className='App'>
      <h2>Soy tres componentes:</h2>
      <Filters />
      <CharacterList />
      <CharacterDetail />
    </div>
  );
}

export default App;
