import styles from './Header.module.scss';
import Nav from './Nav';
const Header = () => {
	return (
		<header className={styles.header}>
			<Nav />
		</header>
	);
};

export default Header;
