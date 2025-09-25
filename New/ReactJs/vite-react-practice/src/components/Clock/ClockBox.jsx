import styles from './ClockBox.module.scss';

function ClockBox({ times }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.hours}>{times.hours}</div>
			<div className={styles.dots}>:</div>
			<div className={styles.minutes}>{times.minutes}</div>
			<div className={styles.dots}>:</div>
			<div className={styles.seconds}>{times.seconds}</div>
		</div>
	);
}

export default ClockBox;
