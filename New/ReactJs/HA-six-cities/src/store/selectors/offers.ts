import { State } from '../../types';

const selectOffers = (state: State) => state.offers;
const selectNavs = (state: State) => state.navs;

export { selectOffers, selectNavs };
