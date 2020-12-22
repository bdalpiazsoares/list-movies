import React from 'react';

import MovieCard from '../MovieCard/MovieCard';

import './movie-list.scss';

function MovieList({ movieList = [], nothingFound = false, openModal }) {

  function renderContent() {
    if (!nothingFound) {
      return (
        <ul className='container-list'>
          {movieList.map((item) => (
            <MovieCard
              key={item.imdbID}
              openModal={openModal}
              item={item}
            />
          ))}
        </ul>
      );
    } else {
      return (
        <span>nothing was found :(</span>
      );
    }
  }
  
  return (
    <div className='container-movie-list'>
      {renderContent()}
    </div>
  );
}

export default MovieList;