import { useState } from 'react';
import ClockBox from './ClockBox';
import ClockAction from './ClockAction';
import { useEffect } from 'react';

function Clock() {
	console.log('render');

	let date = new Date();
	let interval;

	let getTime = () => {
		let hours = date.getHours().toString().padStart(2, '0');
		let minutes = date.getMinutes().toString().padStart(2, '0');
		let seconds = date.getSeconds().toString().padStart(2, '0');

		let timeObject = {
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
		return timeObject;
	};

	let [values, setValues] = useState({
		hours: getTime().hours,
		minutes: getTime().minutes,
		seconds: getTime().seconds,
		isTick: true
	});

	let setTimes = ({ hours, minutes, seconds }, isTick) => {
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
	} else clearInterval(interval);

	let clearInt = () => {
		if (values.isTick) {
			setTimes(getTime(), false);
		} else {
			setTimes(getTime(), true);
		}
	};

	let resetClock = () => {
		setTimes({ hours: '00', minutes: '00', seconds: '00' }, false);
	};

	return (
		<div className="Clock">
			<ClockBox times={values} />
			<ClockAction
				onStartHandler={clearInt}
				onResetHandler={resetClock}
			/>
		</div>
	);
}
export default Clock;
