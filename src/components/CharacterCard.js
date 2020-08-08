import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_index.scss';

const CharacterCard = (props) => {
  return (
    <article className='ch-card'>
      <img className='cd-img' src={props.image} alt='Foto del personaje'></img>
      <h3 className='ch-name'>{props.name}</h3>
      <p className='ch-type'>{props.specie}</p>
      <Link to={`/character/${props.id}`} className='card__btn'>
        + Info
      </Link>
    </article>
  );
};

export default CharacterCard;
