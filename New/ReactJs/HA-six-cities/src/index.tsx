import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { PLACES } from './constants';
import { CARDS_DATA } from './constants';
import { CITIES } from './constants';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App places={PLACES} cardsData={CARDS_DATA} cities={CITIES}/>
  </React.StrictMode>
);
