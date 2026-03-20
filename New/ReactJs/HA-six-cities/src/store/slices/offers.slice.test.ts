import { NAV_ITEMS, LoadingStatus } from '../../constants';
import { makeFakeOffer } from '../../utils/mocks/makeFakeOffer';
import { offersSlice, offersActions } from '../slices/offers';
import { commentsActions } from './comments';

// Тестируем, что слайс возвращает ожидаемое сост-е, если прокинуть в него пустой action
describe('Offers slice', () => {
  it('Should return initialState with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      navs: NAV_ITEMS,
      offers: [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()],
      acitveCard: '',
      loadingStatus: LoadingStatus.LOADING,
    };

    // Нужно добраться до самого редюсера в слайсе offersSlice
    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  // Тестируем, что слайс вернёт начальное состояние, если в аргументы редюсера не прокинуть начальный state и прокинуть пустой action
  it('Should return default initial state with empty action & undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      navs: NAV_ITEMS,
      offers: [],
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return state whith current acitveCard by "setActiveId" action', () => {
    const fakeOffer = makeFakeOffer();
    const initialState = {
      navs: NAV_ITEMS,
      offers: [],
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    };
    const expectedAcitveCard = fakeOffer.id;

    const result = offersSlice.reducer(
      initialState,
      offersActions.setActiveId(fakeOffer.id)
    );

    expect(result.acitveCard).toBe(expectedAcitveCard);
  });

  it('Should return state with favorite offer', () => {
    const fakeOffer = makeFakeOffer();
    const fakeFavoriteOffer = {
      ...fakeOffer,
      isFavorite: true,
    };
    const initialState = {
      navs: NAV_ITEMS,
      offers: [fakeOffer],
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    };

    const expectedOffers = [fakeFavoriteOffer];

    const result = offersSlice.reducer(
      initialState,
      offersActions.setFavorites(fakeOffer.id)
    );

    expect(result.offers).toEqual(expectedOffers);
  });

  it('Should return state with active nav-button by "setActiveNav" action', () => {
    const fakeActiveNavArray = NAV_ITEMS.map((nav, i) => {
      return i == 3 ? { ...nav, isActive: true } : { ...nav, isActive: false };
    });
    const initialState = {
      navs: NAV_ITEMS,
      offers: [],
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    };
    const expectedNavs = fakeActiveNavArray;

    const result = offersSlice.reducer(
      initialState,
      offersActions.setActiveNav(NAV_ITEMS[3].id)
    );

    expect(result.navs).toEqual(expectedNavs);
  });

  it('Should return state with sorted offers by "sortByScale" action', () => {
    const fakeOffers = [
      { ...makeFakeOffer(), price: 10 },
      { ...makeFakeOffer(), price: 20 },
      { ...makeFakeOffer(), price: 30 },
    ];
    const sortedOffers = [...fakeOffers].sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    });
    const initialState = {
      navs: NAV_ITEMS,
      offers: fakeOffers,
      acitveCard: '',
      loadingStatus: LoadingStatus.IDLE,
    };
    const expectedOffers = sortedOffers;

    const result = offersSlice.reducer(
      initialState,
      offersActions.sortByScale({
        sortField: 'price',
        reverse: false,
        initial: false,
      })
    );

    expect(result.offers).toEqual(expectedOffers);
  });

  // extraReducers
  // Экстраредюсерам передаём в качестве initialState - undefined и они сами генерируют нужный объект
  it('Sould switch "loadingStatus" to "LOADING" with "fetchOffers"', () => {
    const expectedState = {
      navs: NAV_ITEMS,
      offers: [],
      acitveCard: '',
      loadingStatus: LoadingStatus.LOADING,
    };

    const result = offersSlice.reducer(
      undefined,
      offersActions.fetchOffers.pending
    );

    expect(result).toEqual(expectedState);
  });

  it('Sould switch "loadingStatus" to "SUCCESS", put fetched data to "offers" array with "fetchOffers"', () => {
    const fakeOffer = makeFakeOffer();
    const expectedState = {
      navs: NAV_ITEMS,
      offers: [fakeOffer],
      acitveCard: '',
      loadingStatus: LoadingStatus.SUCCESS,
    };

    const result = offersSlice.reducer(
      undefined,
      // в вызове fulfilled теже аргументы, которые в createAsyncThunk(возвращаемое значение,"название самого action??",_arg, которые передаётся в payloadCreator)
      offersActions.fetchOffers.fulfilled([fakeOffer], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
  it('Sould switch "loadingStatus" to "FAILED" with "fetchOffers"', () => {
    const expectedState = {
      navs: NAV_ITEMS,
      offers: [],
      acitveCard: '',
      loadingStatus: LoadingStatus.FAILED,
    };

    const result = offersSlice.reducer(
      undefined,
      offersActions.fetchOffers.rejected
    );

    expect(result).toEqual(expectedState);
  });
});
