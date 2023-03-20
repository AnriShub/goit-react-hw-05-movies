import { ImSearch } from 'react-icons/im';
import css from 'components/Searchbar/Searchbar.module.css';
import { ToastContainer } from 'react-toastify';
import PropTypes from 'prop-types';


export const Searchbar = ({ onSubmit, onChange }) => {
  return (
    <div className={css.Searchbar} >
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <ImSearch size={25} />
        </button>
    
        <input
          className={css.SearchFormInput}
          type="text"
          name="query"
          onChange={onChange}
          placeholder="Search movies"
        />
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired, 
  onChange: PropTypes.func.isRequired
};