import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Clock from './components/Clock/Clock';
import Drops from './components/Drops/Drops';
import HAComponent from './components/HAComponent/HAComponent';
import NavMenu from './components/NavMenu/NavMenu';
import Practice from './components/Practice/Practice';
import Practice2 from './components/Practice2/Practice2';
import MainLayout from './layouts/MainLayout';
import './script';
import './App.scss';

function App() {
	const myProp = 'lorem';
	return (
		<>
			<BrowserRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}
			>
				<div className="app">
					<Routes>
						<Route path="/" element={<MainLayout />}>
							<Route index element={<Practice />} />
							<Route path="clock" element={<Clock />} />
							<Route path="drops" element={<Drops />} />
							<Route path="navmenu" element={<NavMenu />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
			<HAComponent />
			<Practice2 />
		</>
	);
}
export default App;
