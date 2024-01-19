import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'servises/api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
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
      {loading ? <Loader /> : <MoviesList movies={movies} />}
    </section>
  );
};

export default Movies;
