import css from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { useAuth } from '../hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <div className={css.header}>
      <Navigation />
      {renderNavigation()}
    </div>
  );
};

export default AppBar;
