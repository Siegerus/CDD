import React, { useState, AnimationEvent } from 'react';
import styles from './animation.module.scss';

type Props = {};
const AnimationFade = (props: Props) => {
	const [isVisibleElement, setIsVisibleElement] = useState(true);
	const [isFadeIn, setIsFadeIn] = useState(true);

	const buttonClickHandle = () => {
		setIsFadeIn(!isFadeIn);
		setIsVisibleElement(true);
	};

	const animationEndHandle = (e: AnimationEvent<HTMLElement>) => {
		if (e.animationName === styles.fadeOut) setIsVisibleElement(false);
	};

	const setFadeOutClass = (): string => {
		let targetClassName: string[] = [];
		if (!isFadeIn) targetClassName.push(styles.fadeOut);
		return targetClassName.join('');
	};

	return (
		<>
			{isVisibleElement && (
				<div
					className={`${styles.box} ${setFadeOutClass()}`}
					onAnimationEnd={animationEndHandle}>
					Sandbox
				</div>
			)}
			<button type="button" onClick={buttonClickHandle}>
				Click
			</button>
		</>
	);
};

export default AnimationFade;
