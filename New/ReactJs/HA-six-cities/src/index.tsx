import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './test';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Test />
    <h1>Hello, World!</h1>
  </React.StrictMode>
);
