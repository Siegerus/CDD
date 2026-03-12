import { makeFakeOffer } from '../../utils/mocks/makeFakeOffer';
import { LoadingStatus, NAV_ITEMS } from '../../constants';
import {
  selectOffers,
  selectNavs,
  selectActiveCard,
  selectLoadingStatus,
  getActiveNav,
} from '../selectors/offers';

describe('Offers selectors', () => {
  const state = {
    offers: {
      navs: NAV_ITEMS,
      offers: [makeFakeOffer()],
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    },
  };
  it('Should return offers from state', () => {
    const result = selectOffers(state);

    expect(result).toBe(state.offers.offers);
  });
  it('Should return navs from state', () => {
    const result = selectNavs(state);

    expect(result).toBe(state.offers.navs);
  });
  it('Should return active-nav within getState from state', () => {
    const activeNav = state.offers.navs.filter((nav) => nav.isActive);

    const result = getActiveNav(state);

    expect(result).toEqual(activeNav);
  });

  it('Should return active-card from state', () => {
    const result = selectActiveCard(state);

    expect(result).toBe(state.offers.acitveCard);
  });
  it('Should return loading-status from state', () => {
    const result = selectLoadingStatus(state);

    expect(result).toBe(state.offers.loadingStatus);
  });
});
