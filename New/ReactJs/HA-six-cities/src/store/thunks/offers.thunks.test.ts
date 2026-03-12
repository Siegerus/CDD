// с пакетоми "axios-mock-adapter", "@jedmao/redux-mock-store":
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { State } from '../../types/types';
import { Action } from 'redux';
import { makeFakeOffer } from '../../utils/mocks/makeFakeOffer';
import { APIRoute } from '../../constants';
import { offersActions } from '../slices/offers';

describe('Offers async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios); // для имитации работы axios
  const middleware = [thunk.withExtraArgument(axios)]; // подготовка массива middleware
  // имитация стора с @jedmao/redux-mock-store
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, ReturnType<typeof createAPI>, Action>
  >(middleware);

  let store: ReturnType<typeof mockStoreCreator>;

  // перед каждым тестом, стор нужно пересоздавать, что бы избежать конфликтов и побочных эффектов
  beforeEach(() => {
    store = mockStoreCreator({
      offers: {
        offers: [],
      },
    });
  });

  describe('data/fetchOffers action', () => {
    // Вариант-пример проверок для экшенов, у которых нет полезной нагрузки

    it('Should dispatch "data/fetchOffers.pending" & "data/fetchOffers.fullfield" with thunk "data/fetchOffers"', async () => {
      mockAxiosAdapter
        .onGet(APIRoute.OFFERS) // имитация запроса
        .reply(200); // задаём фейковый ответ 200, 2м агументом можно передать ответ с данными

      await store.dispatch(offersActions.fetchOffers());

      const actions = store.getActions().map(({ type }) => type);

      // Проверяем, что в фейковый стор отдиспатчатчились нужные, ожидаемые действия
      expect(actions).toEqual([
        offersActions.fetchOffers.pending.type,
        offersActions.fetchOffers.fulfilled.type,
      ]);
    });

    // Проверяем случай с rejected
    it('Should dispatch "data/fetchOffers.pending" & "data/fetchOffers.rejected" when response 400 ', async () => {
      mockAxiosAdapter.onGet(APIRoute.OFFERS).reply(400);

      await store.dispatch(offersActions.fetchOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        offersActions.fetchOffers.pending.type,
        offersActions.fetchOffers.rejected.type,
      ]);
    });
    // Вариант-пример проверок для экшенов, у которых есть полезная нагрузка

    it('Should dispath "data/fetchOffers.pending" & "data/fetchOffers.fullfield" with thunk "data/fetchOffers", when response 200', async () => {
      const mockOffers = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];
      mockAxiosAdapter.onGet(APIRoute.OFFERS).reply(200, mockOffers);

      await store.dispatch(offersActions.fetchOffers());

      const actions = store.getActions();
      const expectedActionTypes = actions.map(({ type }) => type);

      // Кастуем, что бы тс не ругался, т.к. в интерфейсе action функционалом не предусмотрено payload по умолчанию
      const fetchOffersActionFullfield = actions.at(1) as ReturnType<
        typeof offersActions.fetchOffers.fulfilled
      >;

      expect(expectedActionTypes).toEqual([
        offersActions.fetchOffers.pending.type,
        offersActions.fetchOffers.fulfilled.type,
      ]);

      expect(fetchOffersActionFullfield.payload).toEqual(mockOffers);
    });

    it('Should dispatch "data/fetchOffers.pending" & "data/fetchOffers.rejected" when response 400 ', async () => {
      mockAxiosAdapter.onGet(APIRoute.OFFERS).reply(400, []);

      await store.dispatch(offersActions.fetchOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toEqual([
        offersActions.fetchOffers.pending.type,
        offersActions.fetchOffers.rejected.type,
      ]);
    });
  });
});
