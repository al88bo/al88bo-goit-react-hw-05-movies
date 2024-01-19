import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovieDay } from 'servises/api';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovieDay()
      .then(({ results }) => setMovies(results))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      {loading ? <Loader /> : <MoviesList movies={movies} />}
    </>
  );
};
export default Home;
