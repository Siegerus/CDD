import './App.scss';
import MyComponent from './components/MyComponent';
import OtherComponent from './components/OtherComponent';
import AnyInfo from './components/AnyInfo';
import ImageBox from './components/ImageBox';
import RandomNumber from './components/RandomNumber';

function App() {
	return (
		<div className="app">
			<AnyInfo order={1} about="project" importance=" important" />
			<AnyInfo order={2} about="whether" importance=" unimportantly" />
			<AnyInfo order="any" about="whether" importance=" unimportantly" />
			<AnyInfo order={3} about="whether" importance=" unimportantly" />
			<AnyInfo
				order={3}
				about="whether"
				importance=" unimportantly"
				lorem
			/>

			<ImageBox src="https://avatars.mds.yandex.net/i?id=bc4060406b0e33d2ca2766db2b67277d_l-10158105-images-thumbs&n=13" />
			<ImageBox src="https://i.pinimg.com/originals/ae/9b/e1/ae9be178fac17c37c1ef47e1a0c06241.jpg" />

			<RandomNumber />
		</div>
	);
}

export default App;
