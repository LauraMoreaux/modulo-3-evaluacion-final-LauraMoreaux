import React from 'react';
import '../stylesheets/_index.scss';

const CharacterCard = () => {
  return (
    <article className='ch-card'>
      <img className='cd-img' src='' alt='Foto de personaje'></img>
      <h3 className='ch-name'>Nombre Personaje</h3>
      <p className='ch-type'>Tipo: Human</p>
      <p className='link'> Aquí va el link al detalle</p>
    </article>
  );
};

export default CharacterCard;
