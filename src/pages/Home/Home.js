import React, { useState } from 'react';

import apiService from '../../services/apiService';
import toast from '../../utils/toast';

import Button from '../../components/Button/Button';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

import './home.scss';

function Home() {
  const [textSearch, setTextSearch] = useState('');
  const [prevTextSearch, setPrevTextSearch] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [page, setPage] = useState(0);

  async function getListApi() {
    if (textSearch) {
      const response = await apiService.getListByName(textSearch, page + 1);
      setPage(page + 1);
      setPrevTextSearch(textSearch);
      if (response.Error) {
        setMovieList([]);
        setNothingFound(true);
        toast.showErrorMessage('Error when searching')
      }
      else if(response.Search) {
        getDetailMovie(response.Search);
        setNothingFound(false);
      }
    } else {
      toast.showWarningMessage('Insert something to search')
    }
  }

  function handleGetListApi(moreButton = false) {
    if (!moreButton && (textSearch !== prevTextSearch)) {
      setMovieList([]);
      setPage(0);
      getListApi();
    }
    else if (moreButton){
      getListApi();
    }
    else if (!moreButton && (!textSearch)) {
      toast.showWarningMessage('Insert something to search');
    }
  }

  function orderMovies(list) {
    const newList = list;
    if (page <= 1) {
      newList.sort((a, b) => Number(a.imdbRating) - Number(b.imdbRating));
      setMovieList(prev => [...prev, ...newList.reverse()]); 
    }
    else {
      setMovieList(prev => [...prev, ...newList]); 
    }
  }

  async function getDetailMovie(list) {
    const promiseList = [];

    list?.forEach((item) => {
      promiseList.push(apiService.getListById(item.imdbID));
    });

    Promise.all(promiseList).then((res) => {
      orderMovies(res);
    });
  }

  return (
    <div className='container-total'>
      <SearchBar
        onChange={setTextSearch}
        onClick={handleGetListApi}
      />
      <MovieList
        movieList={movieList}
        nothingFound={nothingFound}
      />
      {!!movieList.length && (
        <div className='container-button-more-results'>
          <Button
            text='carregar mais resultados'
            onClick={() => handleGetListApi(true)}
            type='big'
          />
        </div>
      )}
    </div>
  );
}

export default Home;