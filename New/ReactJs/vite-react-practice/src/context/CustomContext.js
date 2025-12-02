import { createContext } from 'react';

const CustomContext = createContext({
	elems: [],
	setElems: () => {},
});

export default CustomContext;
