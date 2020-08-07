import React from 'react';
import '../stylesheets/_index.scss';

const CharacterCard = (props) => {
  console.log(props);
  return (
    <article className='ch-card'>
      <img className='cd-img' src={props.image} alt='Foto del personaje'></img>
      <h3 className='ch-name'>{props.name}</h3>
      <p className='ch-type'>{props.specie}</p>
      {/* <Link to={`/product/${props.id}`} className="card__btn">
      </Link> */}
    </article>
  );
};

export default CharacterCard;
