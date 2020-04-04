import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';

export const fetchSearchMovies = async (keyword) => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`;
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
