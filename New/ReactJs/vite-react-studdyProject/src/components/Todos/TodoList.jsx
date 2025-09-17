import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem';

function TodoList() {
	return (
		<ul className={styles.list}>
			<TodoListItem />
		</ul>
	);
}

export default TodoList;
