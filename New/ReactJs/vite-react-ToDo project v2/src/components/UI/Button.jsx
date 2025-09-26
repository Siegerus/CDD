import styles from './Button.module.scss';

function Button(props) {
	let { onClick, children, title, disabled = false } = props;
	return (
		<button
			{...props}
			className={styles.button}
			onClick={onClick}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
export default Button;
