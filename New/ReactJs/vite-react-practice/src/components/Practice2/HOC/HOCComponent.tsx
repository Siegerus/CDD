import React from 'react';
import withMyHOC from './HOC';
import InnerComponent from './InnerComponent';

type Props = {};

const InnerComponentWithHOC = withMyHOC(InnerComponent); // оборачиваем к-т в HOC

const HOCComponent = (props: Props) => {
	return (
		<>
			<InnerComponentWithHOC />
		</>
	);
};

export default HOCComponent;
