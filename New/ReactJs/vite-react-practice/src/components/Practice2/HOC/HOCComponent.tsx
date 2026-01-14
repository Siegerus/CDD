import React from 'react';
import withMyHOC from './HOC';
import InnerComponent from './InnerComponent';

type Props = {};

const InnerComponentWrapper = withMyHOC(InnerComponent); // оборачиваем к-т в HOC

const HOCComponent = (props: Props) => {
	return (
		<>
			<InnerComponentWrapper />
		</>
	);
};

export default HOCComponent;
