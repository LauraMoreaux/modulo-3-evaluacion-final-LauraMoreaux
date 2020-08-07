import React from 'react';
import '../stylesheets/_index.scss';

const CharacterDetail = () => {
  return (
    // <Link to="/">
    <div className='modal'>
      <div className='modal__dialog'>
        <div className='modal__content'>
          <header className='modal__header'>
            <h2 className='modal__title'>Nombre del personaje</h2>
            {/*
                    <Link to="/"> */}
            <span className='modal__close icon fas fa-times'></span>
            {/* </Link> */}
          </header>
          <section className='modal__details'>
            <img className='card__img' src='' alt='Foto' />
            <ul className='ch-details'>
              <li>Status:Alive</li>
              <li>Species:Human</li>
              <li>Origin:Earth</li>
              <li>Episodes: 31</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    // </Link>;
  );
};

export default CharacterDetail;
