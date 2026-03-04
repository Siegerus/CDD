import { createSelector } from '@reduxjs/toolkit';
import { State, OffersState } from '../../types/types';

type Selector = Pick<State, keyof State>;

const selectOffers = (state: Selector) => state.offers.offers;
const selectNavs = (state: Selector) => state.offers.navs;
const selectActiveCard = (state: Selector) => state.offers.acitveCard;
const selectLoadingStatus = (state: Selector) => state.offers.loadingStatus;

// Вариант возврата селектора через "createSelector"
const getNavs = createSelector(
  (state: State) => state.offers,
  (state: OffersState) => state.navs
);
// Кастомный селектор. Сразу отфильтровали активный нав. Такой кастомный сел-р мемоизируется под капотом
const getActiveNav = createSelector(
  (state: State) => state.offers,
  (state: OffersState) => state.navs.filter((nav) => nav.isActive)
);

export { getNavs, getActiveNav };
export { selectOffers, selectNavs, selectActiveCard, selectLoadingStatus };
