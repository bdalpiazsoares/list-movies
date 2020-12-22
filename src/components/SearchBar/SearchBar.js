import React from 'react';

import './search-bar.scss';

function SearchBar({ onChange = () => {}, onClick = () => {} }) {
  return (
    <div className='container'>
      <span className='header-title'>Find Your Movies and Series</span>
      <div className='search-bar-container'>
        <input
          className='search-bar'
          type='text'
          placeholder='Ex: "batman", "superman"'
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
    </div>
  );
}

export default SearchBar;