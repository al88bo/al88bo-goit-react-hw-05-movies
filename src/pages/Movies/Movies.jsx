import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovieByQuery } from 'servises/api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getMovieByQuery(query)
      .then(({ results }) => setMovies(results))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({
      query: e.currentTarget.elements.searchInput.value,
    });
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="searchInput" defaultValue={query} required />
        <button type="submit">Search</button>
      </form>
      {loading && <Loader />}
      {!loading && movies && (
        <ul>
          {movies?.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Movies;
