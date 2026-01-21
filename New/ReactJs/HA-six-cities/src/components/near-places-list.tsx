import CitiesCard from '../components/cities-card';
import { Offer } from '../types';

type NearPlacesListProps = {
  onMouseEnterHandle: (id: string) => void;
  nearPlaces: Offer[];
};

const NearPlacesList = (props: NearPlacesListProps) => {
  const { onMouseEnterHandle, nearPlaces } = props;
  return (
    <>
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearPlaces.map((nearPlace: Offer) => {
            return (
              <CitiesCard
                offer={nearPlace}
                key={nearPlace.id}
                id={nearPlace.id}
                cardsClass={'cities__card place-card'}
                wrapperClass={'cities__image-wrapper place-card__image-wrapper'}
                viewWidth={'260'}
                viewHeight={'200'}
                onMouseEnterHandle={onMouseEnterHandle}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default NearPlacesList;
