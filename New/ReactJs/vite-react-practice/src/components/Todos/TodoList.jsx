import styles from './TodoList.module.scss';
import TodoListItem from './TodoListItem';

function TodoList({ valueArray, count }) {
	return valueArray.length > 0 ? (
		<>
			<ul className={styles.list}>
				{valueArray.map((item, i) => {
					if (item !== '')
						return <TodoListItem listValue={item} key={i} />;
				})}
			</ul>
			{count > 0 && (
				<ul className={styles.list}>
					<div className={styles.epmty}>You have {count} todos</div>
				</ul>
			)}
		</>
	) : (
		<ul className={styles.list}>
			<div className={styles.epmty}>List is empty...</div>
		</ul>
	);
}
export default TodoList;
