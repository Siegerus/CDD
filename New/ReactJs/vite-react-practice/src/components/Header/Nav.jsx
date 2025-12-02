import { Link } from 'react-router-dom';

import styles from './Nav.module.scss';

const Nav = () => (
	<nav className={styles.nav}>
		<Link to=".">Practice</Link>
		<Link to="clock">Clock</Link>
		<Link to="drops">Drops</Link>
		<Link to="navmenu">Navmenu</Link>
	</nav>
);

export default Nav;
