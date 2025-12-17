import React from 'react';
import styles from './list-main.module.scss';

type Todo = {
	text: string | null;
	isComplete: boolean;
	id: string;
};

type ListMainProps = {
	todos: Todo[] | undefined;
	onRemoveTodoHandle: (id: string) => void;
	onSetCompleteTodoHandle: (id: string) => void;
	onRemoveAllHanle: () => void;
	onCompleteAllHandle: () => void;
};

const ListMain = ({
	todos,
	onRemoveTodoHandle,
	onSetCompleteTodoHandle,
	onRemoveAllHanle,
	onCompleteAllHandle,
}: ListMainProps) => {
	return (
		<>
			<div>
				<button className={styles['set-all']} onClick={onRemoveAllHanle}>
					Remove All
				</button>
				<button className={styles['set-all']} onClick={onCompleteAllHandle}>
					Complete All
				</button>
			</div>
			<ul className={styles.list}>
				{todos?.map((todo, i) => {
					const keyValue = `${i}-#`;
					return (
						<ListItem
							todo={todo}
							key={keyValue}
							id={todo.id}
							onCloseButtonHandle={onRemoveTodoHandle}
							onSetCompleteTodoHandle={onSetCompleteTodoHandle}
						/>
					);
				})}
			</ul>
		</>
	);
};

type ListItemProps = {
	todo: {
		text: string | null;
		isComplete: boolean;
		id: string;
	};
	onCloseButtonHandle: (id: string) => void;
	onSetCompleteTodoHandle: (id: string) => void;
	id: string;
};

const ListItem = ({
	todo,
	onCloseButtonHandle,
	onSetCompleteTodoHandle,
	id,
}: ListItemProps) => {
	return (
		<>
			<li
				className={
					todo.isComplete ? `${styles.item} ${styles.item_active}` : styles.item
				}
				onDoubleClick={() => onSetCompleteTodoHandle(id)}>
				<div>{todo?.text}</div>
				<button onClick={() => onCloseButtonHandle(id)}>✖</button>
			</li>
		</>
	);
};

export default ListMain;
