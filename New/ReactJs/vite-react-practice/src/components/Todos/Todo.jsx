import styles from './Todo.module.scss';
import TodoForm from './TodoForm';

function Todo() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Todo List</h1>
			<TodoForm />
		</div>
	);
}

export default Todo;
