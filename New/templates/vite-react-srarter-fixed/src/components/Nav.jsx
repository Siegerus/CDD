import { useState } from 'react';
import './Nav.scss';

function Nav() {
	let [displayState, setDisplayState] = useState('none');
	let mouseOver = () => {
		setDisplayState('block');
	};

	let mouseLive = () => {
		setDisplayState('none');
	};
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li
					className="nav__list-item"
					onMouseOver={mouseOver}
					onMouseLeave={mouseLive}
				>
					Lorem
					<ul
						className="nav__list-dropdown"
						style={{ display: { displayState } }}
					>
						<li>ipsum</li>
						<li>ipsum</li>
						<li>ipsum</li>
					</ul>
				</li>
				<li
					className="nav__list-item"
					onMouseOver={mouseOver}
					onMouseLeave={mouseLive}
				>
					Lorem
					<ul
						className="nav__list-dropdown"
						style={{ display: { displayState } }}
					>
						<li>dolores</li>
						<li>dolores</li>
						<li></li>
					</ul>
				</li>
				<li className="nav__list-item">Lorem</li>
				<li className="nav__list-item">Lorem</li>
				<li className="nav__list-item">Lorem</li>
			</ul>
		</nav>
	);
}

export default Nav;
