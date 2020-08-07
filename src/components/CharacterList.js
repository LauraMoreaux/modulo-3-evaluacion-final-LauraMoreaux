import React from 'react';
import '../stylesheets/_index.scss';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
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
      <section className='ch-list'>{htmlCode}</section>
    </>
  );
};

export default CharacterList;
