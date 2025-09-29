import { createContext } from 'react';

let CustomContext = createContext({
	elems: [],
	setElems: () => {}
});

export default CustomContext;
