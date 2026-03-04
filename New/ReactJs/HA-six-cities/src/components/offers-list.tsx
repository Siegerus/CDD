import CitiesCard from './cities-card';
import { Offer } from '../types/types';
import { AuthState } from '../constants';

type OfferslistProps = {
  authState: (typeof AuthState)[keyof typeof AuthState];
  sortedCards: Offer[];
  cardsClass: string;
  wrapperClass: string;
  viewWidth: string;
  viewHeight: string;
  onMouseEnterHandle: (id: string) => void;
  onClickFavoriteHandle: (id: string) => void;
};

const Offerslist = ({
  authState,
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
          authState={authState}
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
