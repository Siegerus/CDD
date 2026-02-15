import React from 'react';
import { useBoolean } from './hooks';

type Props = {};

const CustomBooleanComponent = (props: Props) => {
	const { isActive, toggleState, stateToFalse } = useBoolean(false);

	return (
		<>
			{isActive && <p>Lorem ipsum dolor sit amet consectetur.</p>}
			<p>{isActive.toString()}</p>
			<hr />
			<button onClick={() => toggleState()} type="button">
				Click to Toggle
			</button>
			<button onClick={() => stateToFalse()} type="button">
				Click to False
			</button>
		</>
	);
};

export default CustomBooleanComponent;
