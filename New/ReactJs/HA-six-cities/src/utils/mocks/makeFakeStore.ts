import { makeFakeOffer } from './makeFakeOffer';
import { makeFakeComments } from './makeFakeComments';
import { NAV_ITEMS } from '../../constants';
import { LoadingStatus } from '../../constants';
import { State } from '../../types/types';

export const makeFakeStore = (
  initialState?: Partial<State>
): Partial<State> => {
  return {
    offers: {
      offers: [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()],
      navs: NAV_ITEMS,
      loadingStatus: LoadingStatus.IDLE,
      acitveCard: '',
    },
    comments: {
      comments: [makeFakeComments(), makeFakeComments(), makeFakeComments()],
      isCommentsLoading: false,
    },
    ...(initialState ?? {}), // Так сможем переопределить пар-ом initialState(если он будет) любые значения стора
  };
};
