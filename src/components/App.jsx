import React, { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from './redux/auth/auth-operations';
import css from './App.module.css';
import { Layout } from './Layout';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../Pages/Home'));
const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div className={css.appContainer}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} /> {}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
