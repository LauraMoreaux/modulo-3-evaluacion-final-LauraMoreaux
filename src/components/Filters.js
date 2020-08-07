import React from 'react';
import '../stylesheets/_index.scss';
import Img2 from '../images/rick_icon.png';

const Filters = (props) => {
  const handleFilterChild = (ev) => {
    props.handleFilter(ev.target.value);
  };

  return (
    <form className='form'>
      <div className='wrapper'>
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

        <button type='submit' className='img-box'>
          <img src={Img2} alt='icono de Rick' />
          {/* <i className='fal fa-search'></i> */}
        </button>
      </div>
    </form>
  );
};

export default Filters;
