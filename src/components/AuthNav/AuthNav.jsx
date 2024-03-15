import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration" className={css.link}>
        Registration
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
}
