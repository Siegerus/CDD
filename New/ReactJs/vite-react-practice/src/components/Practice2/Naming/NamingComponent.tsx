import React from 'react';
import ButtonComponent from './ButtonComponent';

const NamingComponent = () => {
	const handleButtonClick = () => {
		console.log('Click!');
	};

	return (
		<div>
			<div className="wrapper">
				<ButtonComponent onButtonClick={handleButtonClick} />
			</div>
		</div>
	);
};

export default NamingComponent;
