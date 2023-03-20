import { NavLink } from 'react-router-dom';
import css from 'components/NavBar/NavBar.module.css';

export const NavBar = () => {
    return (
        <header className={css.NavBar}>
            <div className="">
                <nav>
                    <ul className={css.NavList}>
                        <li key='/'><NavLink className={({ isActive }) => (isActive ? css.active : css.inactive)} 
                     to={'/'}>Home</NavLink></li>
                        <li key='movies'> <NavLink className={({ isActive }) => (isActive ? css.active : css.inactive)}
                    to={'movies'}>Movies</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};


              