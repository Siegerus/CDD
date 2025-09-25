import styles from './ClockAction.module.scss';

function ClockAction({ onStartHandler, onResetHandler }) {
	return (
		<div className={styles.wrapper}>
			<button
				className={styles.button}
				onClick={onStartHandler}
				type="button"
			>
				Start
			</button>
			<button
				className={styles.button}
				onClick={onResetHandler}
				type="button"
			>
				Reset
			</button>
		</div>
	);
}

export default ClockAction;
