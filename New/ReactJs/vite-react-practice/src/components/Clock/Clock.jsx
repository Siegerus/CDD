import { useState } from 'react';

import ClockAction from './ClockAction';
import ClockBox from './ClockBox';

function Clock() {
	const date = new Date();
	let interval;

	const getTime = () => {
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const seconds = date.getSeconds().toString().padStart(2, '0');

		const timeObject = {
			hours,
			minutes,
			seconds,
		};
		return timeObject;
	};

	const [values, setValues] = useState({
		hours: getTime().hours,
		minutes: getTime().minutes,
		seconds: getTime().seconds,
		isTick: true,
	});

	const setTimes = ({ hours, minutes, seconds }, isTick) => {
		clearInterval(interval);
		setValues({
			hours,
			minutes,
			seconds,
			isTick,
		});
	};

	if (values.isTick) {
		interval = setInterval(() => {
			setTimes(getTime(), true);
		}, 1000);
	} else clearInterval(interval);

	const clearInt = () => {
		if (values.isTick) {
			setTimes(getTime(), false);
		} else {
			setTimes(getTime(), true);
		}
	};

	const resetClock = () => {
		setTimes({ hours: '00', minutes: '00', seconds: '00' }, false);
	};

	return (
		<div className="Clock">
			<ClockBox times={values} />
			<ClockAction onStartHandler={clearInt} onResetHandler={resetClock} />
		</div>
	);
}
export default Clock;
