function reducer(state: any, action: any) {
	switch (action.type) {
		case 'ACTION_1':
			return { value: action.payload };
		case 'ACTION_2':
			return { value: action.payload };

		default:
			return state;
	}
}

export { reducer };

// базовая функция reducer
// Функция принимает значение текущего состояния и обьект события (action).
// Обьект события содержит два свойства — это тип события (action.type) и значение события (action.value).
