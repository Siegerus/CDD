import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import { AppRoute, AuthState } from '../constants';
import { NavItemType, Offer } from '../types';
import ErrorPage from '../pages/404-page/404-page';

import MainPage from '../pages/main-page/main-page';

type AppProps = {
  offersCount: number;
  navItems: NavItemType[];
  offers: Offer[];
};

function App({ offersCount, navItems, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              isMainPage
              authState={AuthState.NoAuth}
              offersCount={offersCount}
              offers={offers}
              navItems={navItems}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <PrivateRoute authState={AuthState.Auth} isReverse>
              <LoginPage isLoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authState={AuthState.Auth} isReverse={false}>
              <FavoritesPage authState={AuthState.Auth} offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage authState={AuthState.Auth} />}
        />
        <Route path={AppRoute.Page404} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
