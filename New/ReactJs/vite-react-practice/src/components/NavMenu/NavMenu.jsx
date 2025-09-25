import { useState } from 'react';
import styles from './NavMenu.module.scss';
import NavItem from './NavItem';

function NavMenu() {
	let [navs, setNavs] = useState([
		{ text: 'lorem1', onElement: false },
		{ text: 'lorem2', onElement: false },
		{ text: 'lorem3', onElement: false },
		{ text: 'lorem4', onElement: false },
		{ text: 'lorem5', onElement: false }
	]);

	let links = {
		main: ['link1', 'link2', 'link3'],
		second: ['link4', 'link5', 'link6']
	};

	let onMouseEnterHandler = index => {
		setNavs(
			navs.map((nav, idx) => {
				if (idx == index)
					return {
						...nav,
						onElement: true
					};
				else
					return {
						...nav,
						onElement: false
					};
			})
		);
	};

	return (
		<div className={styles.wrapper}>
			{navs.map((nav, i) => {
				return (
					<div key={i}>
						<NavItem
							text={nav.text}
							onMouseEnter={onMouseEnterHandler}
							index={i}
						/>
						{nav.onElement && i == 0 && (
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
				);
			})}
		</div>
	);
}

export default NavMenu;
