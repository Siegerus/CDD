import { useState } from 'react';
import styles from './animation2.module.scss';

const Animation2 = () => {
	const [isElemVisible, setIsElemVisible] = useState(true);
	const [isAnimated, setIsAnimated] = useState(false);

	const hanleAnimationEnd = (e) => {
		if (e.animationName === `${styles.fadeOut}`) {
			setIsElemVisible(false); // просле проигрывания styles.elem_hidding с анимацией исчезновения элемент изсчезает
			setIsAnimated(false); // и ставим ему класс с анимацией появления styles.elem_showing
		}
	};

	const handleButtonClick = () => {
		if (!isElemVisible) {
			// первый клик — показываем с анимацией появления
			// Компонент появляется с styles.elem_showing
			setIsElemVisible(true);
			setIsAnimated(false); // На всякий случай. isAnimated и так изначально false
		} else {
			// повторный клик — запускаем анимацию исчезновения
			// убирается с класс анимацией появления styles.elem_showing и добавляется класс с анимацией исчезновения styles.elem_hidding
			setIsAnimated(true);
		}
	};

	return (
		<div className={styles.wrapper}>
			<button type="button" onClick={() => handleButtonClick()}>
				click
			</button>
			{isElemVisible && (
				<span
					className={`${styles.elem} ${
						isAnimated ? styles.elem_hidding : styles.elem_showing
					}`}
					tabIndex={0}
					role="button"
					onKeyDown={() => setIsElemVisible(false)}
					onClick={() => setIsAnimated(true)}
					onAnimationEnd={(e) => hanleAnimationEnd(e)}>
					elem
				</span>
			)}
		</div>
	);
};
export default Animation2;

// Ниже вариант попроще, с меньшими проверками,  но не полностью корректный
// const Practice = () => {
// 	const [isElemVisible, setIsElemVisible] = useState(true);
// 	const [isAnimated, setIsAnimated] = useState(false);

// 	const hanleAnimationEnd = (e) => {
// 		if (e.animationName === styles.fadeOut) {
// 			setIsElemVisible(false);
// 		}
// 	};

// 	const handleButtonClick = () => {
// 		setIsAnimated((prevState) => !prevState);
// 		setIsElemVisible(true);
// 	};

// 	return (
// 		<div className={styles.wrapper}>
// 			<button type="button" onClick={() => handleButtonClick()}>
// 				click
// 			</button>
// 			{isElemVisible && (
// 				<span
// 					className={`${styles.elem} ${
// 						isAnimated ? styles.elem_hidding : styles.elem_showing
// 					}`}
// 					tabIndex={0}
// 					role="button"
// 					onKeyDown={() => setIsElemVisible(false)}
// 					onClick={() => setIsAnimated(true)}
// 					onAnimationEnd={(e) => hanleAnimationEnd(e)}>
// 					elem
// 				</span>
// 			)}
// 		</div>
// 	);
// };

// export default Practice;
