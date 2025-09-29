import { useState } from 'react';
import UserContext from './context/UserContext';
import User from './components/User';
import ChangeUser from './components/ChangeUser';
import './App.scss';


function App() {
	let [user, setUser] = useState('Alex');

	return (
		<UserContext.Provider value={{UserName: user, ChangeUserName: setUser}}>    
			<div className="app">
				<User />
			</div>
			<ChangeUser />
		</UserContext.Provider>
		
	);
}


export default App;



