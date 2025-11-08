// import CitiesCard from '../../components/cities-card';
import Offerslist from '../../components/offers-list';
import Header from '../../components/header';
import NavItem from '../../components/nav-item';
import CitiesMap from '../../components/cities-map';
import SortingList from '../../components/sorting-list';
import { NavItemType, Offer } from '../../types';
import { useState } from 'react';

type MainPageProps = {
  isMainPage: boolean;
  authState: string;
  offersCount: number;
  navItems: NavItemType[];
  offers: Offer[];
};

const MainPage = ({
  offersCount,
  navItems,
  offers,
  authState,
  isMainPage,
}: MainPageProps): JSX.Element => {
  const [activeNavs, setActiveNavs] = useState(navItems);
  let filteredByCity: Offer[] | undefined;
  const [sortedOffers, setSortedOffers] = useState(filteredByCity);

  const onNavClickHandle = (id: string) => {
    setActiveNavs(
      activeNavs.map((activeNav) => {
        return activeNav.id == id
          ? {
              ...activeNav,
              isActive: true,
            }
          : {
              ...activeNav,
              isActive: false,
            };
      }),
    );
  };

  activeNavs.forEach((nav) => {
    if (nav.isActive == true)
      filteredByCity = offers.filter((offer) => offer.city.name == nav.city);
  });

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
                  onClick={onNavClickHandle}
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
              <SortingList />
              <div className="cities__places-list places__list tabs__content">
                <Offerslist offers={filteredByCity} cardsClass={"cities__card place-card"} />
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
