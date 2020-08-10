import React from 'react';
import '../stylesheets/_index.scss';
import PropTypes from 'prop-types';
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
        <span className='ch-list'>
          {props.characters.length === 0 ? (
            <span className='error-box'>
              El personaje {searchText} no se encuentra
            </span>
          ) : (
            htmlCode
          )}
        </span>
      </section>
    </>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.array,
  filteredCharacter: PropTypes.string,
};

export default CharacterList;
