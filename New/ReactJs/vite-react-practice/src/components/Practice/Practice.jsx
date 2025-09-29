import { useState } from 'react';
import CustomContext from '../../context/CustomContext';
import InnerPractive from './InnerPractive';

let array = [
	{ text: 'Lorem1', active: false },
	{ text: 'Lorem2', active: false },
	{ text: 'Lorem3', active: false },
	{ text: 'Lorem4', active: false },
	{ text: 'Lorem5', active: false },
];

const Practice = () => {
	let [elems, setElems] = useState(array);

	return (
		<CustomContext.Provider value={{ elems: elems, setElems: setElems }}>
			<InnerPractive />;
		</CustomContext.Provider>
	);
};

export default Practice;
