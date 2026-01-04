import React, { useEffect, useState } from 'react';
import { sassNull } from 'sass';

type Time = {
	[key: string]: string | number;
};

const getTimes = (): Time => {
	const seconds =
		new Date().getSeconds() < 10
			? '0' + new Date().getSeconds()
			: new Date().getSeconds();
	const minutes =
		new Date().getMinutes() < 10
			? '0' + new Date().getMinutes()
			: new Date().getMinutes();
	const hours =
		new Date().getHours() < 10
			? '0' + new Date().getHours()
			: new Date().getHours();
	return {
		seconds,
		minutes,
		hours,
	};
};

const Clock = () => {
	const [isLaunch, setIsLaunch] = useState(true);
	const [times, setTimes] = useState(
		// Через объект
		/* {
		seconds: getTimes().seconds,
		minutes: getTimes().minutes,
		hours: getTimes().hours,
	} */
		// Через массив
		[
			{ value: getTimes().hours },
			{ value: getTimes().minutes },
			{ value: getTimes().seconds },
		]
	);

	useEffect(() => {
		if (!isLaunch) return;
		const interval = setInterval(
			() =>
				setTimes([
					{ value: getTimes().hours },
					{ value: getTimes().minutes },
					{ value: getTimes().seconds },
				]),
			1000
		);

		return () => clearInterval(interval);
	}, [times, isLaunch]);

	const launchButtonClickHandle = () => {
		setIsLaunch(!isLaunch);
	};

	return (
		<>
			<div style={{ display: 'flex', gap: '10px' }}>
				{times.map((time, i) => {
					const keyValue = `${i}-${Math.floor(Math.random() * 1000)}}`;
					return <p key={keyValue}>{time.value}</p>;
				})}
				{
					// Через объект
					/* <p>{time.hours}</p>
					<p>{time.minutes}</p>
					<p>{time.seconds}</p> */
				}
				<button onClick={() => launchButtonClickHandle()}>Click</button>
			</div>
		</>
	);
};

export default Clock;

//   // Initialize the current time to the current date and time
//   const [time, setTime] = useState(new Date());

//   // Update the time every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     // Clear the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   // Extract the hours, minutes, and seconds from the current time
//   const hours = time.getHours();
//   const minutes = time.getMinutes();
//   const seconds = time.getSeconds();

//   // Format the time as a string
//   const timeString = `${hours}:${minutes}:${seconds}`;

//   return (
//     <div>
//       {/* Display the time string */}
//       <h1>{timeString}</h1>
//     </div>
//   );
