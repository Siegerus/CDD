import React from 'react';
import { useCustom } from './hooks';

type Props = {};

const CustomHookComponent = (props: Props) => {
	const FROM = 10;

	const [value, valueHandle] = useCustom(FROM);

	return (
		<>
			<div>my Count: {value}</div>
			<button onClick={() => valueHandle('hellow')}>Click</button>
		</>
	);
};

export default CustomHookComponent;
