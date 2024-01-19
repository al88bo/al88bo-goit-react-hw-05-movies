import { Loader } from '../../components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { IMG_BASE_URL, IMG_DEFAULT, getMovieDetailsById } from 'servises/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const genres = movie?.genres.map(obj => obj.name).join(' ');
  const score = (movie?.vote_average * 10).toFixed(0);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);
    getMovieDetailsById(movieId)
      .then(data => setMovie(data))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      <Link className={css['go-back']} to={backLinkRef.current}>
        Go back
      </Link>
      {loading && <Loader />}
      {!loading && movie && (
        <div>
          <div className={css.details}>
            <img
              src={
                movie.poster_path
                  ? IMG_BASE_URL + movie.poster_path
                  : IMG_DEFAULT
              }
              alt="poster"
              width="200"
              height="300"
            />
            <div>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {score}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{genres}</p>
            </div>
          </div>
          <hr />
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
