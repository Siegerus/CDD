import { useState } from 'react';

import NavItem from './NavItem';
import styles from './NavMenu.module.scss';

function NavMenu() {
	const [navs, setNavs] = useState([
		{ text: 'lorem1', onElement: false },
		{ text: 'lorem2', onElement: false },
		{ text: 'lorem3', onElement: false },
		{ text: 'lorem4', onElement: false },
		{ text: 'lorem5', onElement: false },
	]);

	const links = {
		main: ['link1', 'link2', 'link3'],
		second: ['link4', 'link5', 'link6'],
	};

	const onMouseEnterHandler = (index) => {
		setNavs(
			navs.map((nav, idx) => {
				if (idx === index)
					return {
						...nav,
						onElement: true,
					};
				return {
					...nav,
					onElement: false,
				};
			})
		);
	};

	return (
		<div className={styles.wrapper}>
			{navs.map((nav, i) => (
				<div key={i}>
					<NavItem
						text={nav.text}
						onMouseEnter={onMouseEnterHandler}
						index={i}
					/>
					{nav.onElement && i === 0 && (
						<div className={styles.dropdown}>
							<a href="#">{links.main[0]}</a>
							<a href="#">{links.main[1]}</a>
							<a href="#">{links.main[2]}</a>
						</div>
					)}
					{nav.onElement && i == 1 && (
						<div className={styles.dropdown}>
							<a href="#">{links.second[0]}</a>
							<a href="#">{links.second[1]}</a>
							<a href="#">{links.second[2]}</a>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default NavMenu;
