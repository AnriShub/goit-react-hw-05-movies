import { Link, useLocation } from "react-router-dom";
import css from 'Pages/Home/MovieGallery.module.css';
import emptyPhoto from 'components/images/no_photo.png';
import PropTypes from 'prop-types';


export const MoviesGallery = ({ movies }) => {
    const location = useLocation(); 
    return (
        <ul className={css.ImageGallery} >
            {movies.map((movie, index) => {
                const movieImg = movie.poster_path ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : emptyPhoto;

                return (<li key={movie.id}>
                    <Link
                        to={`/movies/${movie.id}`}
                        state={{ from: location }} >
                        <img
                            className={css.ImageGalleryItemImage}
                            id={movie.id}
                            src={movieImg}
                            alt={movie.id}
                        />
                        <h2 className={css.MovieTitle}>
                            {movie.title ?? movie.original_name}
                        </h2>
                    </Link>

                </li>)
            }
            )}
        </ul>
    )
}


MoviesGallery.propTypes = {
    movies: PropTypes.array.isRequired,
};