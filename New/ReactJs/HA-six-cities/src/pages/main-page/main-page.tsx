import Offerslist from '../../components/offers-list';
import Header from '../../components/header';
import NavItem from '../../components/nav-item';
import CitiesMap from '../../components/cities-map';
import SortingList from '../../components/sorting-list';
import LoadingSpinner from '../../components/LoadingSpinner';
import { NavItemType, Offer, SortField } from '../../types/types';
import { LoadingStatus } from '../../constants';

type MainPageProps = {
  isMainPage: boolean;
  authState: string;
  activeNavs: NavItemType[];
  filteredByCity: Offer[] | undefined;
  currentCity: string;
  activeCard: string;
  loadingStatus: LoadingStatus;
  onNavClickHandle: (id: string, city: string) => void;
  onSortinbyScaleHandle: ({
    field: field,
    reverse: isReverse,
    initial: isInitial,
  }: SortField) => void;
  onMouseEnterHandle: (id: string) => void;
  onClickFavoriteHandle: (id: string) => void;
};

const MainPage = ({
  filteredByCity,
  authState,
  isMainPage,
  activeNavs,
  onNavClickHandle,
  onMouseEnterHandle,
  onSortinbyScaleHandle,
  onClickFavoriteHandle,
  currentCity,
  activeCard,
  loadingStatus,
}: MainPageProps): JSX.Element => {
  if (loadingStatus === 'Loading') return <LoadingSpinner />;

  return (
    <div className="page page--gray page--main">
      <Header authState={authState} isMainPage={isMainPage} />
      <main
        className={
          filteredByCity?.length
            ? 'page__main page__main--index'
            : 'page__main page__main--index page__main--index-empty'
        }>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {activeNavs.map((navItem) => (
                <NavItem
                  city={navItem.city}
                  isActive={navItem.isActive}
                  key={navItem.id}
                  onNavClick={onNavClickHandle}
                  id={navItem.id}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          {filteredByCity?.length ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {filteredByCity.length} places to stay in {currentCity}
                </b>
                <SortingList onSortinbyScaleHandle={onSortinbyScaleHandle} />
                <div className="cities__places-list places__list tabs__content">
                  <Offerslist
                    sortedCards={filteredByCity}
                    onMouseEnterHandle={onMouseEnterHandle}
                    onClickFavoriteHandle={onClickFavoriteHandle}
                    cardsClass={'cities__card place-card'}
                    wrapperClass={
                      'cities__image-wrapper place-card__image-wrapper'
                    }
                    viewWidth={'260'}
                    viewHeight={'200'}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <CitiesMap
                  offers={filteredByCity}
                  currentCity={currentCity}
                  activeCard={activeCard}
                />
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
