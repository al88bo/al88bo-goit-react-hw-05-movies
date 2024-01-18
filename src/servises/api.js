import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzMwOTc1OWQyYmUwMzRjNDE5NGYyOTlhY2YzMjI3OSIsInN1YiI6IjY1YTdkYTY0NTFjMDFmMDEyMjYwYzExNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qc0NOyzXJpWtkCaIQNk6PPQB7PuhhSZ-rnDsPlxPeKY';

export const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300/';

export const getTrendingMovieDay = async () => {
  const { data } = await axios.get('trending/movie/day');
  return data;
};

export const getMovieDetailsById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const getMovieCastById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};

export const getMovieReviewsById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(`search/movie`, { params: { query } });
  return data;
};
