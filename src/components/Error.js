import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/_index.scss';

const Error = (props) => {
  const handleModalContent = (ev) => {
    ev.preventDefault();
  };
  return (
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
            <h2>El personaje que buscas no existe</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Error;
