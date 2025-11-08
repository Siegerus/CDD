import CitiesCard from './cities-card';
import { Offer } from '../types';

type OfferslistProps = {
  offers: Offer[] | undefined;
  cardsClass: string;
};


const Offerslist = ({ offers, cardsClass }: OfferslistProps): JSX.Element => {
  return (
    <>
      {offers?.map((offer) => (
        <CitiesCard offer={offer} key={offer.id} cardsClass={cardsClass} />
      ))}
    </>
  );
};

export default Offerslist;
