import { createContext } from 'react';

const MyContext = createContext({
	myValue: '',
	setMyValue: (val: string) => {},
});

export default MyContext;
