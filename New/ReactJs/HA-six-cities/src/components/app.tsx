import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import ErrorPage from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import { AppRoute, AuthState } from '../constants';
import { SortField } from '../types';
import { offersActions } from '../store/slices/offers';
import { useAppSelector, useAppDispatch } from '../hooks/store';
import {
  selectOffers,
  selectNavs,
  selectActiveCard,
  selectLoadingStatus,
} from '../store/selectors/offers';

function App(): JSX.Element {
  const navs = useAppSelector(selectNavs);
  const offers = useAppSelector(selectOffers);
  const activeCard = useAppSelector(selectActiveCard);
  const loadingStatus = useAppSelector(selectLoadingStatus);
  const dispatch = useAppDispatch();

  const getActiveNav = () => navs.filter((nav) => nav.isActive === true)[0];

  const getCurrentCity = () => getActiveNav().city;

  const getFilteredOffers = () =>
    offers.filter((offer) => offer.city.name === getActiveNav().city);

  const onNavClickHandle = (id: string) => {
    dispatch(offersActions.setActiveNav(id));
  };

  const sortinbyScaleHandle = ({
    field: field,
    reverse: isReverse,
    initial: isInitial,
  }: SortField) => {
    dispatch(
      offersActions.sortByScale({
        field: field,
        reverse: isReverse,
        initial: isInitial,
      })
    );
  };

  const onMouseEnterHandle = (id: string) => {
    dispatch(offersActions.setActiveId(id));
  };

  const onClickFavoriteHandle = (id: string) => {
    dispatch(offersActions.setFavorites(id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              isMainPage
              authState={AuthState.Auth}
              activeNavs={navs}
              onNavClickHandle={onNavClickHandle}
              onMouseEnterHandle={onMouseEnterHandle}
              filteredByCity={getFilteredOffers()}
              onSortinbyScaleHandle={sortinbyScaleHandle}
              onClickFavoriteHandle={onClickFavoriteHandle}
              currentCity={getCurrentCity()}
              activeCard={activeCard}
              loadingStatus={loadingStatus}
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
              <FavoritesPage
                authState={AuthState.Auth}
                currentCity={getCurrentCity()}
                offers={getFilteredOffers()}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={
            <OfferPage
              offers={getFilteredOffers()}
              authState={AuthState.Auth}
              activeCard={activeCard}
              onMouseEnterHandle={onMouseEnterHandle}
            />
          }
        />
        <Route path={AppRoute.Page404} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
