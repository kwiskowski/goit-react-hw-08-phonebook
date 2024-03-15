import { useDispatch } from 'react-redux';
import { logOut } from 'components/redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome {user.name}</span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      ></button>
    </div>
  );
}
