import React, { useState } from 'react';

type Slide = {
	id: number;
	title: string;
	type: string;
	url: string;
};

const SLIDES = [
	{
		id: 1,
		title: 'picture1',
		isVisible: true,
		type: 'nature',
		url: 'https://avatars.mds.yandex.net/get-altay/13818104/2a000001916a455831a0ab82156116767548/XXL_height',
	},
	{
		id: 2,
		title: 'picture1',
		isVisible: false,
		type: 'nature',
		url: 'https://photocentra.ru/images/main68/687144_main.jpg',
	},
	{
		id: 3,
		title: 'picture2',
		isVisible: false,
		type: 'nature',
		url: 'https://yandex-images.clstorage.net/4yk7uX232/0418a0AP6/nlyZJ4eyikmLwwtcMCAdp-70Hx-yNfZZ8gcHdbFHJywY6Pgbf8ACbwxoeV2jqc3R_feScnMvhmj2xEpXzTE7m8tR_XK2v4YQ8ooTAQ0QAYP-iTNqkjTqKLorWxmhejshaZjdUtp52uLl9ZTREnFhYN3q-ncqH-4sq3H2Fk1BauqmECXLI96fOXffjvhYeB1nTlmrO3LAzrSKyx4Rbd5W3QTBvC6awVbqzdksgX4lAWRhLqoHYvKKDBuxTzp1TTJiWlyB8-eeAyHbH-owlPDhu_YFl5vuNBrMZi8ClYH2_i3Y2diKTqEaRlG5ONEi3QVEvc76pzruStS7wSuC6QniHtYkuacvVmOZ85PqeFz0vZueRf_zquh-lKZLUlH90nbJYKEENgIVlj4tubShfiV1HJVe2mNebpZIt5kHukXhmprKmCFXx1Zzodt3EjBcZG0_ftULM_pImhSGQ16xbdJWyTh11DaSkZo6cYH4SRbRBVw1rs7flmaeTM_BvxqlYQr2UjCl_9eq3zl3B57c9OwtO07RD5fu_Ia0RsN-zX2SNqmcJSwSKkVC8qE5kN163VEQjSYajw6mZuiv1SfeeQVy6kJEpafLsi9p-5vuoOzEude2LRMLBlRG7C7HzhUdbsL1dOE0lh6JWvbBpQzFOqnxQKFybmMSJsJsbxlL2pGNNtJORH1rwy5z7fdX1khMKKmr5jEzv2pgVmzOr4qFfRbuLXBZiCYi5cb63cmkiY7lnYhxuqpHJl6-2HOJDzYllbbmxmAF2x_m29lvR1oo7AT9K0oxM3MShF5g2ic-3a0KvoXUzRCKMhXqyqldiEXisRHQrbL--2pmjuCXybNayb1aTpKAMUtbRneR49_68OxAcTvixf_rLoQWtObrHjkN6rJZ3A2MOhq5StY9yTwNrnlp6InS4qt6QorwywG3rhG9GhJyYDW3R97LXWcLjrx0ALEf7t3_oz4o5kDCDx7FOfr8',
	},
	{
		id: 4,
		title: 'picture3',
		isVisible: false,
		type: 'nature',
		url: 'https://static.independent.co.uk/2021/02/25/13/iStock-898172412.jpg?width=1200&height=800&crop=1200:800',
	},
];

let CURRENT_INDEX: number = 0;

const Slider = () => {
	const [slides, setSlides] = useState(SLIDES);

	function setIndex(num: number) {
		CURRENT_INDEX = CURRENT_INDEX + num;
		if (CURRENT_INDEX >= SLIDES.length) CURRENT_INDEX = 0;
		if (CURRENT_INDEX < 0) CURRENT_INDEX = SLIDES.length - 1;
		return CURRENT_INDEX;
	}

	const slideClickHandle = (num: number) => {
		setIndex(num);
		setSlides(
			SLIDES.map((slide, i) => {
				if (i === CURRENT_INDEX) {
					return { ...slide, isVisible: true };
				} else {
					return { ...slide, isVisible: false };
				}
			})
		);
	};

	return (
		<>
			<ul>
				{slides.map(
					(slide, i) =>
						slide.isVisible && (
							<li
								key={i}
								className={slide.isVisible ? 'slide slide_visible' : 'slide'}
							>
								<img
									src={slide.url}
									alt={slide.title}
									width="410"
									height="280"
								/>
							</li>
						)
				)}
			</ul>
			<button type="button" onClick={() => slideClickHandle(-1)}>
				prev
			</button>
			<button type="button" onClick={() => slideClickHandle(1)}>
				next
			</button>
		</>
	);
};

export default Slider;
