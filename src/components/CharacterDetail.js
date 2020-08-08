import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_index.scss';

const CharacterDetail = (props) => {
  const handleModalContent = (ev) => {
    ev.preventDefault();
  };
  return (
    <Link to='/'>
      <div className='modal'>
        <div className='modal__dialog'>
          <div className='modal__content' onClick={handleModalContent}>
            <header className='modal__header'>
              <h2 className='modal__title'>{props.name}</h2>
              <Link to='/'>
                <span className='modal__close icon fas fa-times'></span>
              </Link>
            </header>
            <section className='modal__details'>
              <img
                className='card__img'
                src={props.image}
                alt='Foto del personaje'
              />
              <ul>
                <li className='ch-details'>Estado: {props.status}</li>
                <li className='ch-details'> Especie: {props.specie}</li>
                <li className='ch-details'>Origen: {props.origin}</li>
                <li className='ch-details'> Nº episodios:{props.episode}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetail;
