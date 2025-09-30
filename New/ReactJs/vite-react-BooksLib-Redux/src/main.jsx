import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

import './main.scss';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>      {/* Доступ для всех компонентов к redux-store */}
        <App />
    </Provider>
);
