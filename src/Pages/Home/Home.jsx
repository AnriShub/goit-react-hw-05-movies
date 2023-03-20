import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/api.jsx';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery.jsx';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(({ results }) => {
      if (results.length > 1) {
        setTrendingMovies(results)
      }
    })
  }, []);

  return (
    <>
      <MoviesGallery movies={trendingMovies} />
    </>
  );
};