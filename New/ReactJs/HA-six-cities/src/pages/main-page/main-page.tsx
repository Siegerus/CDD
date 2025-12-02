// import CitiesCard from '../../components/cities-card';
import Offerslist from '../../components/offers-list';
import Header from '../../components/header';
import NavItem from '../../components/nav-item';
import CitiesMap from '../../components/cities-map';
import SortingList from '../../components/sorting-list';
import { NavItemType, Offer } from '../../types';

type MainPageProps = {
  isMainPage: boolean;
  authState: string;
  offersCount: number;
  activeNavs: NavItemType[];
  filteredByCity: Offer[];
  onNavClickHandle: (id: string, city: string) => void;
  onSortinbyScaleHandle: (
    property: 'price' | 'rating',
    direction: boolean
  ) => void;
  onPopularFilterHandle: () => void;
  onMouseEnterHandle?: (id: string | undefined) => void;
};

const MainPage = ({
  offersCount,
  filteredByCity,
  authState,
  isMainPage,
  activeNavs,
  onNavClickHandle,
  onMouseEnterHandle,
  onSortinbyScaleHandle,
  onPopularFilterHandle,
}: MainPageProps): JSX.Element => {
  return (
    <div className="page page--gray page--main">
      <Header authState={authState} isMainPage={isMainPage} />
      <main className="page__main page__main--index">
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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in Amsterdam
              </b>
              <SortingList
                onSortinbyScaleHandle={onSortinbyScaleHandle}
                onPopularFilterHandle={onPopularFilterHandle}
              />
              <div className="cities__places-list places__list tabs__content">
                <Offerslist
                  sortedCards={filteredByCity}
                  onMouseEnterHandle={onMouseEnterHandle}
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
              <CitiesMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
