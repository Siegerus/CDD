import { useState } from 'react';

export function useCustom(
	initialValue: number
): [number, (arg?: string) => void] {
	const [value, setValue] = useState(initialValue);

	const valueHandle = (arg?: string) => {
		if (arg) console.log(arg);
		setValue((prevState) => prevState + 10);
	};

	return [value, valueHandle];
}
