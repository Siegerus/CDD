import { useMemo, useState } from 'react';

import CustomContext from '../../context/CustomContext';
import InnerPractive from './InnerPractive';
import List from './List';

const array = [
	{ text: 'Lorem1', active: false },
	{ text: 'Lorem2', active: false },
	{ text: 'Lorem3', active: false },
	{ text: 'Lorem4', active: false },
	{ text: 'Lorem5', active: false },
];

const Practice = () => {
	const [elems, setElems] = useState(array);

	const valuesObject = useMemo(() => ({ elems, setElems }), [elems]); // значение кэшировано хуком useMemo

	return (
		<CustomContext.Provider value={valuesObject}>
			<InnerPractive />;
			<List />
		</CustomContext.Provider>
	);
};

export default Practice;
