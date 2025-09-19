import styles from './Button.module.scss';

function Button() {
	return (
		<button className={styles.button} type="submit">
			Submit
		</button>
	);
}
export default Button;
