import styles from './NavItem.module.scss';

function NavItem({ text, onMouseEnter, index }) {
	return (
		<div className={styles.item} onMouseEnter={() => onMouseEnter(index)}>
			{text}
		</div>
	);
}

export default NavItem;
