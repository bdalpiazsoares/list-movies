import React, { useState } from 'react';

import Modal from '../Modal/Modal';

import './movie-card.scss';

function MovieCard({ item }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && 
        (<Modal
          item={item}
          closeModal={() => setOpenModal(false)}
        />)
      }
      <div
        className='container-movie-card'
        onClick={() => setOpenModal(true)}
      >
        <img
          className='movie-image'
          src={item.Poster}
          alt='movie-image'
        />
        <span className='title'>{item.Title}</span>
      </div>
    </>
  );
}

export default MovieCard;