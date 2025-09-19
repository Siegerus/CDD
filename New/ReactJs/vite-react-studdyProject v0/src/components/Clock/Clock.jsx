import { useState } from 'react';
import ClockBox from './ClockBox';
import ClockAction from './ClockAction';

function Clock() {
	let [values, setValues] = useState({
		hours: '00',
		minutes: '00',
		seconds: '00',
		isTick: true
	});
	let date = new Date();
	let interval;

	let getTime = () => {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();

		let timeObject = {
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
		return timeObject;
	};

	let setTimes = ({hours, minutes, seconds}, isTick) => {
		clearInterval(interval);
		setValues({
			hours,
			minutes,
			seconds,
			isTick
		});
	};

	if (values.isTick) {
		interval = setInterval(() => {
			setTimes(getTime(), true);
		}, 1000);
	}

	let clearInt = () => {
		if (values.isTick) {
			setTimes(getTime(), false);
		} else {
			setTimes(getTime(), true);
		}
	};

	let resetClock = () => {
		setTimes({hours:'00', minutes:'00', seconds:'00'}, false);
	};

	return (
		<div className="app">
			<ClockBox times={values} />
			<ClockAction
				onStartHandler={clearInt}
				onResetHandler={resetClock}
			/>
		</div>
	);
}
export default Clock;