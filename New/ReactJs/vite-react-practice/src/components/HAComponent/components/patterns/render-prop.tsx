import React from 'react';
// render-prop
// Передача функции с условным рендерингом нижестоящему к-ту

const boolean = true;

const RenderProp = () => {
	return (
		<>
			<div>OuterComponent</div>
			<InnerComponent
				render={(boolean: boolean) =>
					boolean ? <Test /> : <div>false html from InnerComponent</div>
				}
			/>
		</>
	);
};

const Test = () => {
	return <div>true html from InnerComponent</div>;
};

type InnerComponentProps = {
	render: (boolean: boolean) => void;
};

const InnerComponent = ({ render }: InnerComponentProps) => {
	return (
		<div>
			InnerComponent <>{render(boolean)}</>
		</div>
	);
};

export default RenderProp;
