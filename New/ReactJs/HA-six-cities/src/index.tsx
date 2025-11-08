import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { OFFERS_COUNT, NAV_ITEMS } from './constants';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={OFFERS_COUNT} offers={offers} navItems={NAV_ITEMS} />
  </React.StrictMode>,
);
