import React from 'react';
import styles from './list.module.scss';

type ListProps = {
	todos: string[] | undefined;
};

const List = ({ todos }: ListProps) => {
	return (
		<ul className={styles.list}>
			{todos?.map((todo, i) => {
				const keyValue = `${i}-!`;
				return <li key={keyValue}>{todo}</li>;
			})}
		</ul>
	);
};

export default List;
