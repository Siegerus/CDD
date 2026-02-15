import Header from '../../components/header';
import Footer from '../../components/footer';
import CitiesCard from '../../components/cities-card';
import { Offer } from '../../types';

type FavoritesPageProps = {
  authState: string;
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

                {/* {filterFavorites.map((offer: Offer, i, offers) => {
                return (
                  <FavoritesListItem
                    offer={offer}
                    offers={offers}
                    key={offer.id}
                  />
                );
              })} */}

                {/* <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <article className="favorites__card place-card">
                    <div className="favorites__image-wrapper place-card__image-wrapper">
                      <a href="#">
                        <img
                          className="place-card__image"
                          src="img/apartment-small-04.jpg"
                          width="150"
                          height="110"
                          alt="Place image"></img>
                      </a>
                    </div>
                    <div className="favorites__card-info place-card__info">
                      <div className="place-card__price-wrapper">
                        <div className="place-card__price">
                          <b className="place-card__price-value">&euro;180</b>
                          <span className="place-card__price-text">
                            &#47;&nbsp;night
                          </span>
                        </div>
                        <button
                          className="place-card__bookmark-button place-card__bookmark-button--active button"
                          type="button">
                          <svg
                            className="place-card__bookmark-icon"
                            width="18"
                            height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                          </svg>
                          <span className="visually-hidden">In bookmarks</span>
                        </button>
                      </div>
                      <div className="place-card__rating rating">
                        <div className="place-card__stars rating__stars">
                          <span style={{ width: '100%' }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <h2 className="place-card__name">
                        <a href="#">White castle</a>
                      </h2>
                      <p className="place-card__type">Apartment</p>
                    </div>
                  </article>
                </div>
              </li> */}
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
