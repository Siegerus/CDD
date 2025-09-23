import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';


function App() {
	let el = <p>Lorem, ipsum dolor.</p>;
	console.log()
	return (
		<BrowserRouter future={{
			v7_startTransition: true,
			v7_relativeSplatPath: true,
		  }}>
			<div className="app">
				<Routes>
					<Route path="/" element={<h1>Home</h1>}/>
				</Routes>
			</div>
			
		</BrowserRouter>
	);
}
export default App;
