import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { getMovieCast } from 'components/Api/api.jsx';
import css from 'Pages/MovieDetails/Cast/Cast.module.css';
import emptyPhoto from 'components/images/missing_photo.png';


export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState('')
  useEffect(() => {
    getMovieCast(id).then(setCast);
  }, [id]);

  return (
    <div>
      <h1>Cast</h1>
      <ul className={css.castList} >
        {cast !== '' &&
          cast.map((caster, index) => {
            const casterImg = caster.profile_path ? 'https://image.tmdb.org/t/p/w500' + caster.profile_path : emptyPhoto;
            return (<li key={index}>
              <p>{caster.name}</p>

              <img
                width="200px"
                src={casterImg}
                alt={caster.name}
              />
            </li>)
          })
        }
      </ul>
    </div>
  );
};