import { createSelector } from '@reduxjs/toolkit';
import { State, OffersState } from '../../types/types';

type Selector = Pick<State, 'offers'>;

const selectOffers = (state: Pick<State, 'offers'>) => state.offers.offers;
const selectNavs = (state: Pick<State, 'offers'>) => state.offers.navs;
const selectActiveCard = (state: Pick<State, 'offers'>) =>
  state.offers.acitveCard;
const selectLoadingStatus = (state: Pick<State, 'offers'>) =>
  state.offers.loadingStatus;

// Вариант возврата селектора через "createSelector"
const getNavs = createSelector(
  (state: Pick<State, 'offers'>) => state.offers,
  (state: OffersState) => state.navs
);
// Кастомный селектор. Сразу отфильтровали активный нав. Такой кастомный сел-тор мемоизируется под капотом
const getActiveNav = createSelector(
  (state: Pick<State, 'offers'>) => state.offers,
  (state: OffersState) => state.navs.filter((nav) => nav.isActive)
);

export { getNavs, getActiveNav };
export { selectOffers, selectNavs, selectActiveCard, selectLoadingStatus };
