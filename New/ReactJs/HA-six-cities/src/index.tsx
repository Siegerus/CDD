import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './store';
import { offersActions } from './store/slices/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store
  .dispatch(offersActions.fetchOffers())
  // диспатч асинхронных action возвращает промис. Тут делают логику визуальной обработки ошибок, например, плагинами (например toastify)
  // так же обрабатывать можно в интерсепторах апи.
  // unwrap достаёт оригинальное состояние промиса
  .unwrap() // без unwrap не будут ловиться ошибки и все запросы будут считаться выполнеными.
  .catch((err: Error) => console.log(`Error catched! Text: ${err.message}`));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
