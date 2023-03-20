import { Searchbar } from 'components/Searchbar/Searchbar.jsx';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
import { searchMovies } from 'components/Api/api.jsx';
// import css from 'components/Pages/Home/MovieGallery.module.css';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { toast } from 'react-toastify';
// import emptyPhoto from 'components/images/missing_photo.png';




export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error('Search fild is empty');
      return
    }
    setSearchParams(query !== '' ? { query } : {});
  }

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    searchMovies(query).then(({ results }) => {
      if (results.length > 1) {
        setSearchMovie(results)
      }
    })
  }, [searchParams]);

  return (
    <main>
      <div>
        <Searchbar
          onSubmit={handleSubmit}
          onChange={handleChange}
          query={query}
        />
      </div>
      <MoviesGallery movies={searchMovie} />
    </main>
  );
};