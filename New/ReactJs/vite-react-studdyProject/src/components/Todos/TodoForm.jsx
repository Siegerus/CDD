import styles from './TodoForm.module.scss';
import Button from '../UI/Button';

function TodoForm() {
	return (
		<div className={styles.wrapper}>
			<input className={styles.input}></input>
			<Button />
		</div>
	);
}

export default TodoForm;
