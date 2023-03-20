import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=7752b7319b478a62fea227c419e04b15';

export const fetchTrendingMovies = async () => {
  return await axios.get(`/trending/movie/day${API_KEY}`).then(response => response.data);
};

export const searchMovies = async (inputValue) => {
  return await axios.get(`/search/movie${API_KEY}&query=${inputValue}&language=en-US&page=1`).then(response => response.data);
};

export const getMovieDetails = async (movieId) => {
  return await axios.get(`/movie/${movieId}${API_KEY}&language=en-US`).then(response => response.data);
};

export const getMovieCast = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits${API_KEY}&language=en-US`
  );

  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getMovieReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};
