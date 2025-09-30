import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './components/Clock/Clock';
import Drops from './components/Drops/Drops';
import NavMenu from './components/NavMenu/NavMenu';
import MainLayout from './layouts/MainLayout';
import Practice from './components/Practice/Practice';
import './App.scss';



function App() {
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true,
				v7_relativeSplatPath: true
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
	);
}
export default App;
