import { useState } from 'react';
import UserContext from './context/UserContext';
import User from '.components/User';
import './App.scss';


function App() {
	let [user, setUser] = useState('Alex');

	return (
		<UserContext.Provider value={user}>
			<div className="app">
				<User />
			</div>
		</UserContext.Provider>
	);
}


export default App;



