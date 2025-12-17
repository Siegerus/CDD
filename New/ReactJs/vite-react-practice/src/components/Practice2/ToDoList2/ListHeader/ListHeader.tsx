import React from 'react';
import styles from './list-header.module.scss';

type ListHeaderProps = {
	counter: number | undefined;
};

const ListHeader = ({ counter }: ListHeaderProps) => {
	return (
		<>
			<h1 className={styles.title}>ToDoList</h1>
			<p className={styles.counter}>{counter}</p>
		</>
	);
};

export default ListHeader;
