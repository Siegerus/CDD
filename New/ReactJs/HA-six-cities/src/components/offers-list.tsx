import CitiesCard from './cities-card';
import { Offer } from '../types';

type OfferslistProps = {
  sortedCards: Offer[];
  cardsClass: string;
  wrapperClass: string;
  viewWidth: string;
  viewHeight: string;
  onMouseEnterHandle: (id: string) => void;
  onClickFavoriteHandle: (id: string) => void;
};

const Offerslist = ({
  sortedCards,
  onMouseEnterHandle,
  onClickFavoriteHandle,
  cardsClass,
  wrapperClass,
  viewWidth,
  viewHeight,
}: OfferslistProps): JSX.Element => {
  return (
    <>
      {sortedCards.map((offer) => (
        <CitiesCard
          offer={offer}
          key={offer.id}
          id={offer.id}
          cardsClass={cardsClass}
          wrapperClass={wrapperClass}
          viewWidth={viewWidth}
          viewHeight={viewHeight}
          onMouseEnterHandle={onMouseEnterHandle}
          onClickFavoriteHandle={onClickFavoriteHandle}
        />
      ))}
    </>
  );
};

export default Offerslist;
