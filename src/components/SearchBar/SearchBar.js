import React from 'react';

import './search-bar.scss';

function SearchBar({ onChange = () => {}, onClick = () => {} }) {
  return (
    <div className='search-bar-container'>
      <input
        className='search-bar'
        type='text'
        placeholder='Search...'
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        className='search-button'
        name='search-button'
        type='button'
        onClick={() => onClick()}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;