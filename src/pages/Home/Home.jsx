import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovieDay } from 'servises/api';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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
      {loading ? (
        <Loader />
      ) : (
        <ul>
          {movies?.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Home;
