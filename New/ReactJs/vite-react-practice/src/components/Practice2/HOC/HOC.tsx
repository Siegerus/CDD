import { ComponentType, useState } from 'react';
// Наименование HOCов начинается с "with" - для ф-ции и с "With" - для самого HOCа
// Суть типизации HOCа.
// Указываем для целевого к-та те типы, с которыми он "пришёл", исключая те, типы, которые добавит наш HOC (withMyHOC)
//

type withMyHOC = {
	render: () => JSX.Element;
};

type ComponentProps = Omit<ComponentType, keyof withMyHOC>;

function withMyHOC<T>( // ф-ция, которая принимает к-т, которому будет давать доп. св-ва, доп.разметку и т.д
	Component: ComponentType<T> //
): ComponentType<Omit<T, keyof withMyHOC>> {
	// ниже сам HOC, которы будет возвращать целевой к-т
	function WithMyHOC(props: ComponentProps) {
		const [isVisiblevalue, setisVisiblevalue] = useState(false);
		return (
			<>
				<Component
					// тут даём компоненту его изначальные св-ва, с которыми он был
					{...(props as T)}
					// и добавляем новое - "render"
					render={() => (
						// Реализация происходит через паттерн "функц-ый рендеринг"
						<p
							onClick={() => setisVisiblevalue(!isVisiblevalue)}
							style={{ cursor: 'pointer' }}>
							Hellow from HOC!
							{isVisiblevalue ? ' --- Clicked! Click again to hide...' : ''}
						</p>
					)}
				/>
			</>
		);
	}
	return WithMyHOC;
}

export default withMyHOC;
