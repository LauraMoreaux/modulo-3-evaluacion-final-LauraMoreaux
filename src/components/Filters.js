import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/_index.scss';
import Img2 from '../images/rick_icon.png';

const Filters = (props) => {
  const handleFilterChild = (ev) => {
    props.handleFilter(ev.target.value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='wrapper__form'>
        <label htmlFor='filterName' className='form__label '>
          Introduce tu personaje
        </label>
        <input
          type='text'
          className='form__input-text'
          id='filterName'
          value={props.filteredCharacter}
          placeholder='Rick'
          onChange={handleFilterChild}
        />
        <img src={Img2} alt='icono de Rick' className='img-box' />
      </div>
    </form>
  );
};

Filters.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filteredCharacter: PropTypes.string.isRequired,
};

export default Filters;
