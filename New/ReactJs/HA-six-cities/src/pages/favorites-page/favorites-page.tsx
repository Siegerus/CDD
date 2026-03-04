import Header from '../../components/header';
import Footer from '../../components/footer';
import CitiesCard from '../../components/cities-card';
import { Offer } from '../../types/types';
import { AuthState } from '../../constants';

type FavoritesPageProps = {
  authState: (typeof AuthState)[keyof typeof AuthState];
  currentCity: string;
  offers: Offer[];
};

const FavoritesPage = ({
  authState,
  currentCity,
  offers,
}: FavoritesPageProps): JSX.Element => {
  const filterFavorites = offers.filter((offer) => offer.isFavorite === true);

  const relevantOffers = filterFavorites.find(
    (offer) => offer.city.name === currentCity
  );

  // const fovoriteOffers = offers.reduce(
  //   (obj: Record<string, Offer[]>, offer: Offer) => {
  //     obj[offer.city.name] = obj[offer.city.name] || [];
  //     obj[offer.city.name].push(offer);
  //     return obj;
  //   },
  //   {}
  // );
  // console.log(fovoriteOffers);

  return (
    <div className="page">
      <Header authState={authState} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {!!relevantOffers && (
              <ul className="favorites__list">
                <li className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{currentCity}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {filterFavorites.map((offer) => (
                      <CitiesCard
                        offer={offer}
                        cardsClass={'favorites__card place-card'}
                        wrapperClass={
                          'favorites__image-wrapper place-card__image-wrapper'
                        }
                        viewWidth={'150'}
                        viewHeight={'110'}
                        key={offer.id}
                      />
                    ))}
                  </div>
                </li>
              </ul>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

type FavoritesListItemProps = {
  offer: Offer;
  offers: Offer[];
};

const FavoritesListItem = ({ offer, offers }: FavoritesListItemProps) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{`${offer.city.name}`}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <CitiesCard
            offer={offer}
            cardsClass={'favorites__card place-card'}
            wrapperClass={'favorites__image-wrapper place-card__image-wrapper'}
            viewWidth={'150'}
            viewHeight={'110'}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
};

export default FavoritesPage;
