import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthState } from '../constants';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import ErrorPage from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import { useState } from 'react';

import { setActiveNav, sortByScale } from '../store/actions';
import { navsSelector, offersSelector } from '../store/reducer';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, State, SortField } from '../types';

type AppProps = {};

function App(props: AppProps): JSX.Element {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const useAppSelector: TypedUseSelectorHook<State> = useSelector;

  const navs = useAppSelector(navsSelector);
  const offers = useAppSelector(offersSelector);
  const dispatch = useAppDispatch();

  const getActiveNav = () => navs.filter((nav) => nav.isActive === true)[0];

  const getCurrentCity = () => getActiveNav().city;

  const getFilteredOffers = () =>
    offers.filter((offer) => offer.city.name === getActiveNav().city);

  const onNavClickHandle = (id: string) => {
    dispatch(setActiveNav(id));
  };

  const sortinbyScaleHandle = ({
    field: field,
    reverse: isReverse,
  }: SortField) => {
    dispatch(sortByScale({ field: field, reverse: isReverse }));
  };

  // const sortinbyScaleHandle = (
  //   property: 'price' | 'rating',
  //   reverse: boolean
  // ) => {
  //   const sorted = filteredByCity?.sort((a: Offer, b: Offer) => {
  //     return a[property] > b[property] === reverse ? 1 : -1;
  //   });
  //   setSortedCards([...sorted]);
  // };

  // const popularFilterHandle = () => {
  //   setSortedCards(filteredByCity.filter((offer) => offer.price === 80));
  // };

  const [activeCard, setActiveCard] = useState('');

  const onMouseEnterHandle = (id: string) => {
    setActiveCard(id);
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
              currentCity={getCurrentCity()}
              activeCard={activeCard}
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
          element={
            <OfferPage
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
