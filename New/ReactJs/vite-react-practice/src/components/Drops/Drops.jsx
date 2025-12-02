import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Drops.module.scss';

function Drops() {
	const [navs, setNavs] = useState([
		{ text: 'Lorem1', isClicked: false, id: uuidv4() },
		{ text: 'Lorem2', isClicked: false, id: uuidv4() },
		{ text: 'Lorem3', isClicked: false, id: uuidv4() },
		{ text: 'Lorem4', isClicked: false, id: uuidv4() },
		{ text: 'Lorem5', isClicked: false, id: uuidv4() },
	]);

	const dropDowns = [
		{ text: '1', id: uuidv4() },
		{ text: '2', id: uuidv4() },
		{ text: '3', id: uuidv4() },
		{ text: '4', id: uuidv4() },
		{ text: '5', id: uuidv4() },
	];

	const clickHandler = (index) => {
		setNavs(
			navs.map((nav, idx) => {
				if (idx == index)
					return {
						...nav,
						isClicked: true,
					};
				return { ...nav, isClicked: false };
			})
		);
	};

	return (
		<div className={styles.wrapper}>
			<div>
				{navs.map((nav, index) => (
					<div key={nav.id}>
						<div
							className={styles.square}
							onClick={() => clickHandler(index)}
							style={
								nav.isClicked == true ? { color: 'blue' } : { color: 'white' }
							}
						>
							{nav.text}
						</div>
						{dropDowns.map(
							(dropDown, i) =>
								i == index &&
								nav.isClicked && (
									<div key={dropDown.id}>{`${nav.text} dropdown`}</div>
								)
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Drops;
