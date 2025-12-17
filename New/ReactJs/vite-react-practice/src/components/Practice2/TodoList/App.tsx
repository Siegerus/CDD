import { FormEvent, useState } from 'react';
import Form from './Form/Form';
import List from './List/List';
import Header from './Header/Header';

import './App.scss';

const App = () => {
	const [todos, setTodos] = useState<string[] | undefined>([]);

	const formSubmitHandle = (e: FormEvent, value: string) => {
		e.preventDefault();
		const valueArr = [];
		valueArr.push(value);
		// Была ошибка типа "Type 'string[] | undefined' must have a '[Symbol.iterator]()' method that returns an iterator."
		// Из за использования спред оператора на undefined или null. НИже 2 варианта решения
		setTodos([...(todos as []), ...valueArr]);
		// if (todos && 'string' in todos) setTodos([...todos, ...res]);
	};

	return (
		<>
			<Header />
			<Form onFormSubmitHandle={formSubmitHandle} />
			<List todos={todos} />
		</>
	);
};

export default App;
