import CitiesCard from './cities-card';
import { Offer } from '../types';

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
