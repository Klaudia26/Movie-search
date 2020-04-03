import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';

export const fetchMovies = async (keyword) => {
  const url = `${baseUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}`;
  const response = await axios.get(url);

  return response;
};

export const fetchTopMovies = async () => {
  const url = `${baseUrl}/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=20`;
  const response = await axios.get(url);

  return response;
};
