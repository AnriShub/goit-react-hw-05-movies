import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import emptyPhoto from 'components/images/no_photo.png';
import css from 'Pages/MovieDetails/MovieDetails.module.css';
import { getMovieDetails } from 'components/Api/api.jsx';
// import { Cast } from 'Pages/MovieDetails/Cast/Cast.jsx';
// import { Reviews } from 'Pages/MovieDetails/Reviews/Reviews.jsx';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentMovie, setCurrentMovies] = useState('');


  useEffect(() => { getMovieDetails(id).then(setCurrentMovies) }, [id]);


  // const [showCast, setShowCast] = useState(false)
  // const [showReviews, setReviews] = useState(false)
  const [toggleCast, setToggleCast] = useState('cast')
  const onToggleCast = () => {
    setToggleReviews("reviews");
    setToggleCast(prevState => prevState === "cast" ? "" : "cast");
  };

  const [toggleReviews, setToggleReviews] = useState('reviews')
  const onToggleReviews = () => {
    setToggleCast("cast");
    setToggleReviews(prevState => prevState === "reviews" ? "" : "reviews");
  };

  // const onCast = () => {
  //   setShowCast(prevState => !prevState);
  //   setReviews(false);
  //   onToggleCast();
  //   setToggleReviews('reviews')
  // };

  // const onReviews = () => {
  //   setReviews(prevState => !prevState);
  //   setShowCast(false);
  //   onToggleReviews();
  //   setToggleCast('cast')
  // };

  const onBack = () => {
    navigate(location?.state?.from || '/');
  }

  return (
    <div className={css.MovieDetails}>
      <div>
      <button className={css.but} 
          type="button"
          name="GoBack"
          onClick={onBack}
        >
          Go Back
        </button>
      </div>
      <img
        width="300px"
        src={currentMovie.poster_path ? `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}` : emptyPhoto}
        alt={currentMovie.name}
      />
      <ul className={css.btns}>

<li>
<NavLink  
        onClick={onToggleCast}
        className={({ isActive }) => (isActive ? css.active : css.inactive)}
         to={toggleCast} state={{ from: location.state?.from ?? '/' }}>
          {/* <button className={css.but} 
            type="button"
            name="ShowCast"
            onClick={onCast}
          >
            Cast
          </button> */}
          Cast
        </NavLink>
</li>
       
<li>
<NavLink 
        onClick={onToggleReviews}
        // className="Nav_link"
        // activeClassName="activeRoute"
        className={({ isActive }) => (isActive ? css.active : css.inactive)} 
        to={toggleReviews} state={{ from: location.state?.from ?? '/' }}>
          {/* <button className={css.but} 
            type="button"
            name="ShowReviews"
            onClick={onReviews}
          >
            Reviews
          </button> */}
          Reviews
        </NavLink>
</li>
        
      </ul>

      <h1>
        {currentMovie.title}
      </h1>
      <h2>
        Average vote: {currentMovie.vote_average}
      </h2>
      <p>
        Vote count: {currentMovie.vote_count}
      </p>
      <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>

      {/* {showCast && <Cast
      />}
      {showReviews && <Reviews
      />} */}
    </div>
  );
};