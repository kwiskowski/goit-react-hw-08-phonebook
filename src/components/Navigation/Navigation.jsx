import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/" className={css.link} end>
        Home
      </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </nav>
  );
};

export default Navigation;
