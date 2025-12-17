import React from 'react';
import styles from './header.module.scss';

type Props = {};

const Header = (props: Props) => {
	return <h1 className={styles.title}>Notes List</h1>;
};

export default Header;
