import { useState, useContext } from 'react';

import CustomContext from '../../context/CustomContext';
import styles from './InnerPractive.module.scss';

const InnerPractive = () => {
	const { elems, setElems } = useContext(CustomContext);
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};
	const onClickHandler = (index) => {
		setElems(
			elems.map((elem, idx) =>
				index === idx
					? { ...elem, active: !elem.active }
					: { ...elem, active: false }
			)
		);
	};

	return (
		<>
			<div className={styles.wrapper}>
				{elems.map((elem, i) => {
					const keyValue = `${i}-lorem`;
					return (
						<a
							className={styles.lorems}
							key={keyValue}
							onClick={() => onClickHandler(i)}
							style={elem.active ? { color: 'green' } : { color: '' }}
							role="button"
							tabIndex={0}
							onKeyDown={() => onClickHandler(i)}
							href="google.com"
						>
							{elem.text}
						</a>
					);
				})}
			</div>
			<div
				className={
					!isActive ? styles.elem : `${styles.elem} ${styles.elem_active}`
				}
				role="button"
				tabIndex={0}
				onClick={toggleActive}
				onKeyDown={toggleActive}
			>
				Elem
			</div>
		</>
	);
};

export default InnerPractive;
