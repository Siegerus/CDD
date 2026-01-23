import { useContext, useState } from 'react';
import MyContext from './MyContext';

type Props = {};

const ContextComponent = (props: Props) => {
	const [value, setValue] = useState('anyVal');

	return (
		<>
			<MyContext.Provider value={{ myValue: value, setMyValue: setValue }}>
				<Inner />
			</MyContext.Provider>
		</>
	);
};

const Inner = () => {
	const { myValue, setMyValue } = useContext(MyContext);

	const buttonClickHandle = () => {
		setMyValue('changed!');
	};
	return (
		<>
			<button onClick={buttonClickHandle}>click</button>
			<div>{myValue}</div>
		</>
	);
};

export default ContextComponent;
