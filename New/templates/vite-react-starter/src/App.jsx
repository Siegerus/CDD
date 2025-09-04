import logo from './assets/images/logo.svg';
import './App.scss';
import React from 'react';
/* function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p className="header">Vite React Starter 💯</p>
        <p>
          Vite + React <br />
          ESLint + Prettier + Stylelint
          <br />
          Sass + Emotion + Tailwind
          <br />
          Jest + Testing Library
        </p>
      </header>
    </div>
  );
}

export default App; */

let App = () => {
	let [buttonClass, buttonSetClass] = React.useState('app__button');
	function onButtonClick() {
		buttonSetClass('app__button app__button_green');
	}
	return (
		<div className="app">
			<button className={buttonClass} onClick={onButtonClick}>
				<span>Click!</span>
			</button>
		</div>
	);
};

export default App;
