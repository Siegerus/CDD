import { useState } from 'react';
import { generateRandomNum } from '../utils/generateRandomNum';

function RandomNumber({ maxNum }) {
	let [currentValue, SetValue] = useState(generateRandomNum(maxNum));
	let setRandomNumber = () => {
		SetValue(generateRandomNum(maxNum));
	};
	return (
		<div>
			<h1>{currentValue}</h1>
			<button onClick={setRandomNumber}>Random</button>
		</div>
	);
}

export default RandomNumber;
