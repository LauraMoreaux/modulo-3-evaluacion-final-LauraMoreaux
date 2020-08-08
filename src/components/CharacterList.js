import React from 'react';
import '../stylesheets/_index.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const searchText = props.filteredCharacter;
  const htmlCode = props.characters.map((character, index) => {
    return (
      <CharacterCard
        key={index}
        id={character.id}
        name={character.name}
        image={character.image}
        specie={character.species}
      />
    );
  });

  return (
    <>
      <section className='ch-list'>
        <span className='ch-list error-box'>
          {props.characters.length === 0
            ? `El personaje ${searchText} no se encuentra`
            : htmlCode}
        </span>
      </section>
    </>
  );
};

export default CharacterList;
