import React from 'react';

type InnerComponentProps = {
	render: () => JSX.Element;
};

const InnerComponent = (props: InnerComponentProps) => {
	return <div>{props.render()}</div>; //
};

export default InnerComponent;
