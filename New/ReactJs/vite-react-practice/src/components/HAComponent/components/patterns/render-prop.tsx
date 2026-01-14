import React, { ReactNode } from 'react';
// render-prop
// Передача функции с условным рендерингом нижестоящему к-ту

const isMobile = true;
function render(renderCase: boolean) {
	return renderCase ? <p>lorem mobile</p> : <p>lorem</p>;
}

const RenderProp = () => {
	return (
		<>
			<div>
				<Component render={render}></Component>
			</div>
		</>
	);
};

type ComponentProps = {
	render: (isMobile: boolean) => ReactNode;
};

const Component = ({ render }: ComponentProps) => {
	return <div>{render(isMobile)}</div>;
};

export default RenderProp;
