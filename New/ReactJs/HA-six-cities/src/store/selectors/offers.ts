import { State } from '../../types/types';

type Selector = Pick<State, keyof State>;

const selectOffers = (state: Selector) => state.offers.offers;
const selectNavs = (state: Selector) => state.offers.navs;
const selectActiveCard = (state: Selector) => state.offers.acitveCard;
const selectLoadingStatus = (state: Selector) => state.offers.loadingStatus;

export { selectOffers, selectNavs, selectActiveCard, selectLoadingStatus };
