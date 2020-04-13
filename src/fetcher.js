import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';

export const fetchSearchMovies = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  return response;
};

export const fetchTopMovies = async () => {
  const url = `${baseUrl}/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=4`;
  const response = await axios.get(url);

  return response;
};

export const fetchBestMovies = async () => {
  const url = `${baseUrl}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=4`;
  const response = await axios.get(url);

  return response;
};

export const fetchUpcomingMovies = async () => {
  const url = `${baseUrl}/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;
  const response = await axios.get(url);
  return response;
};

export const fetchTvShows = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  return response;
};

export const fetchTvPopular = async () => {
  const url = `${baseUrl}/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const response = await axios.get(url);

  return response;
};

export const fetchAllMoviesAndTvShows = async (keyword, page = 1) => {
  const url = `${baseUrl}/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&page=${page}`;
  const response = await axios.get(url);

  return response;
};

export const fetchGenre = async () => {
  const url = `${baseUrl}/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response;
};

export const fetchLanguages = async () => {
  const url = `${baseUrl}/3/configuration/languages?api_key=${process.env.REACT_APP_API_KEY}`;
  const response = await axios.get(url);
  return response;
};
