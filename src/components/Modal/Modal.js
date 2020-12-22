import React from 'react';

import Button from '../Button/Button';

import './modal.scss';

function Modal({ item, closeModal }) {
  return (
    <div className='modal'>
      <div className='container-modal'>
        <div className='content-modal'>
          <img
            className='movie-image-modal'
            src={item.Poster}
            alt='movie-image-modal'
          />
          <span className='title-modal'>{item.Title}</span>
          <small>{item.Genre}</small>
          <div className='container-detail'>
            <small className='detail'>Imdb: {item.imdbRating}</small>
            <small className='detail'>{item.Year}</small>
            <small className='detail'>{item.Runtime}</small>
            {item.totalSeasons && (<small className='detail'>Seasons: {item.totalSeasons}</small>)}
          </div>
          <small className='plot-modal'>{item.Plot}</small>
        </div>
        <div className='container-button-modal'>
          <Button text='close' onClick={closeModal} />
        </div>
      </div>
    </div>
  );
}

export default Modal;