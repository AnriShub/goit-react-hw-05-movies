import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getMovieReviews } from 'components/Api/api.jsx';
import css from 'Pages/MovieDetails/Reviews/Reviews.module.css';


export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState('')

  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);

  return (
    <div>
      <h1>Reviews</h1>
      <ul className={css.reviewsBox}>
        {reviews !== '' &&
          reviews.map((rev) => (
            <li key={rev.id}>
              <div className={css.Author}>{rev.author}</div>
              <p>{rev.content}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
};