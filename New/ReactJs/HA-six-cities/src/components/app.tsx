import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from './private-route';
import { Paths } from '../constants';
import Page404 from './page-404';

import MainPage from '../pages/main-page/main-page';

type AppProps = {
  places: number;
  cities: string[];
  cardsData: {
    title: string;
    price: number;
    src: string;
    premium: boolean;
  }[];
};

function App({ places, cities, cardsData }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={Paths.Root}
          element={
            <MainPage places={places} cardsData={cardsData} cities={cities} />
          }
        />
        <Route path={Paths.Login} element={<LoginPage />} />
        <Route
          path={Paths.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={Paths.Offer} element={<OfferPage />} />
        <Route path={Paths.Page404} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
