import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from '../../servises/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieReviewsById(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => alert(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && reviews.length === 0 && (
        <p>There are no reviews for now...</p>
      )}
      {!loading && reviews.length > 0 && (
        <ul>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
