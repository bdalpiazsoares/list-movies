import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com',
});

const getListByName = async (movieName = '', page = 1) => {
  const response = await api.get(`/?s=${movieName}&page=${page}&apikey=d4525c1e&plot=full`);
  return response.data;
}

const getListById = async (movieId = '') => {
  const response = await api.get(`/?i=${movieId}&apikey=d4525c1e&plot=full`);
  return response.data;
}

/*const getListByGenre = async (genre = '', page) => {
  const response = await api.get(`/?s=${genre}&page=${page}&apikey=d4525c1e`);
  return response.data;
}

const getListByYear = async (year = '1995', page = 1) => {
  const response = await api.get(`/?s=${' '}&y=${year}&page=${1}&apikey=d4525c1e&plot=full`);
  return response.data;
}*/

export default { api, getListByName, getListById };