import React, { MouseEvent } from 'react';

type ButtonComponentProps = {
	onButtonClick: () => void;
};

const ButtonComponent = ({ onButtonClick }: ButtonComponentProps) => {
	const handleButtonClick = (e: MouseEvent) => {
		onButtonClick();
	};
	return <button onClick={handleButtonClick}>Button</button>;
};

export default ButtonComponent;
