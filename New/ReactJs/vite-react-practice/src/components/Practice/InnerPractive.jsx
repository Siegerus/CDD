import { useState } from 'react';
import { useContext } from 'react';
import CustomContext from '../../context/CustomContext';
import styles from './InnerPractive.module.scss';

const InnerPractive = () => {
	let { elems, setElems } = useContext(CustomContext);
	let [isActive, setIsActive] = useState(false);

	let toggleActive = () => {
		setIsActive(!isActive);
	};
	let onClickHandler = index => {
		setElems(
			elems.map((elem, idx) => {
				return index == idx
					? { ...elem, active: !elem.active }
					: { ...elem, active: false };
			})
		);
	};

	return (
		<>
			<div className={styles.wrapper}>
				{elems.map((elem, i) => {
					return (
						<div
							className={styles.lorems}
							key={i}
							onClick={() => onClickHandler(i)}
							style={
								elem.active ? { color: 'green' } : { color: '' }
							}
						>
							{elem.text}
						</div>
					)
				})}
			</div>
			<div
				className={
					!isActive
						? styles.elem
						: `${styles.elem} ${styles.elem_active }`
				}
				onClick={toggleActive}
			>
				Elem
			</div>
		</>
	);
};

export default InnerPractive;
