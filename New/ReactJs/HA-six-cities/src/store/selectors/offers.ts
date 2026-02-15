import { State } from '../../types';

const selectOffers = (state: State) => state.offers;
const selectNavs = (state: State) => state.navs;
const selectActiveCard = (state: State) => state.acitveCard;
const selectLoadingStatus = (state: State) => state.isOffersLoading;
const selectComments = (state: State) => state.comments;

export {
  selectOffers,
  selectNavs,
  selectActiveCard,
  selectLoadingStatus,
  selectComments,
};
