import { useState } from 'react';
import styles from './TodoListItem.module.scss';

function TodoListItem({ listValue }) {
	let [nameClass, setNameClass] = useState(styles.item);
	let changeClass = () => {
		setNameClass(`${nameClass} ${styles.complete}`);
	};
	return (
		<li className={nameClass} onDoubleClick={changeClass}>
			{listValue}
		</li>
	);
}
export default TodoListItem;
