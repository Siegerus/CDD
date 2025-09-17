import styles from './Todo.module.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function Todo() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Todo List</h1>
			<TodoForm />
			<TodoList />
		</div>
	);
}

export default Todo;
