import { State } from '../../types';

const selectOffers = (state: State) => state.offers.offers;
const selectNavs = (state: State) => state.offers.navs;
const selectActiveCard = (state: State) => state.offers.acitveCard;
const selectLoadingStatus = (state: State) => state.offers.loadingStatus;

export { selectOffers, selectNavs, selectActiveCard, selectLoadingStatus };
