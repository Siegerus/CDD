import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import styles from './TodosActions.module.scss';
import Button from '../UI/Button';
function TodosActions({
	resetTodos,
	deleteCompletedTodos,
	completedTodosExist
}) {
	return (
		<>
			<Button title="Reset todos" onClick={resetTodos}>
				<RiRefreshLine />
			</Button>
			<Button
				title="Clear completed todos"
				onClick={deleteCompletedTodos}
				disabled={!completedTodosExist}
			>
				<RiDeleteBin2Line />
			</Button>
		</>
	);
}

export default TodosActions;
