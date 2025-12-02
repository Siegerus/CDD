import { useEffect, useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/todos';

type Todo = {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
};

const useFetch = (dependence: boolean): Todo[] | undefined => {
	// хук принимает инфу с сервера и записывает в сост-е datas
	const [datas, setDatas] = useState([]);

	useEffect(() => {
		// Функция с эффектом (колбэк для useEffect) выполняется асинхронно после отрисовки к-та.
		let isMounted = true; // для индикации монтирования к-та.

		async function getData() {
			try {
				const response =
					isMounted &&
					(await fetch('https://jsonplaceholder.typicode.com/todos')); // проверка что к-нт точно "примонтирован".
				const json = response && (await response.json());
				return json;
			} catch (error) {
				if (error instanceof Error) console.log(error.message); // instanceof проверка для TS (typeguard)
			}
		}
		getData().then((res) => {
			setDatas(res);
		});

		return () => {
			isMounted = false;
		};
	}, [dependence]); // зависимость, которую будем передавать в пара-рах
	if (datas) return datas;
};

const CustomHookComponent = () => {
	const [click, setClick] = useState(false); // По клику будет меняться сост-е "click" и будет срабатывать кастомный хук "useFetch" ([click] в завис-тях)
	const todos = useFetch(click);

	const clickToFetchHandle = () => {
		setClick((prevState) => !prevState);
	};

	return (
		<>
			<div className="data-container" style={{ display: 'flex' }}>
				{todos?.map((data, i) => (
					<div key={i}>{data.id}</div>
				))}
			</div>
			<button onClick={clickToFetchHandle} type="button">
				Click to fetch
			</button>
		</>
	);
};

export default CustomHookComponent;

// Ниже тоже самое, только без каст. хука и данные приходят по клику. Все типы указанны корректно.
// *! Сделано неправильно. Нужно всё делать через useEffect ?  или правильно ? *вроде правильно

// const CustomHookComponent = () => {

// async function getData(url: string): Promise<Todo[] | undefined> {
// 	try {
// 		const response = await fetch(url);
// 		const json = await response.json()
// 		return json;
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// const [todos, setTodos] = useState<Todo[] | undefined>([])

// const clickToFetchHandle = () => {
// 	getData(URL).then((result) => {
// 		setTodos(result)
// 	})
// }
// 	return (
// 		<>
// 			<div className="data-container" style={{ "display": "flex" }}>
// 				{todos?.map((data, i) => <div key={i} >{data.id}</div>)}
// 			</div>
// 			<button onClick={clickToFetchHandle} type="button">Click to fetch</button>
// 		</>
// 	)
// }

// export default CustomHookComponent
