import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'Pages/Home/Home.jsx';
import { Movies } from 'Pages/Movies/Movies.jsx';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails.jsx';
import { Cast } from '../Pages/MovieDetails/Cast/Cast';
import { Reviews } from '../Pages/MovieDetails/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetails />} >
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
