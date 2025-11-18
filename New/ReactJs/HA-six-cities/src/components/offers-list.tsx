import CitiesCard from './cities-card';
import { Offer } from '../types';
import { useState } from 'react';

type OfferslistProps = {
	filteredByCity: Offer[] 
	cardsClass: string;
	wrapperClass: string;
	viewWidth: string;
	viewHeight: string;
	onMouseEnterHandle?: (id: string | undefined) => void;
};

const Offerslist = ({
	filteredByCity,
	onMouseEnterHandle,
	cardsClass,
	wrapperClass,
	viewWidth,
	viewHeight,
	
}: OfferslistProps): JSX.Element => {

	// const cardsId = offers?.map(card => card.id)

	// const [activeCards, setActiveCards] = useState(offers);

	// const onMouseEnterHandle = (id: string | undefined) => {
	// 	setActiveCards(
	// 		activeCards?.map((activeCard) => {
	// 			if (activeCard.id === id) {
	// 				console.log('on element')
	// 				return {
	// 					...activeCard,
	// 				};
	// 			} else
	// 				return {
	// 					...activeCard,
	// 				};
	// 		}),
	// 	);
	// 	// console.log(cardsId)
	// };

	return (
		<>
			{filteredByCity?.map((offer) => (
				<CitiesCard
					offer={offer}
					key={offer.id}
					id={offer.id}
					cardsClass={cardsClass}
					wrapperClass={wrapperClass}
					viewWidth={viewWidth}
					viewHeight={viewHeight}
					onMouseEnterHandle={onMouseEnterHandle}
				/>
			))}
		</>
	);
};

export default Offerslist;
