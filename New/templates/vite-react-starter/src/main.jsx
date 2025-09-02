import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import './main.scss';

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */


ReactDOM.createRoot(document.getElementById("root")).render(
<div>
  {App()}
</div>
)

