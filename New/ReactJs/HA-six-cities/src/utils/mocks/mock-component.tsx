import {
  createMemoryHistory,
  MemoryHistory,
  createBrowserHistory,
} from 'history';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MockAdapter from 'axios-mock-adapter';
import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../../types/types';
import { createAPI } from '../../services/api';
import thunk from 'redux-thunk';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { Provider } from 'react-redux';

// export function withHistory(component: JSX.Element, history?: MemoryHistory) {
//   const memoryHistory = history ?? createMemoryHistory();
//   return <MemoryRouter>{component}</MemoryRouter>;
// }

export function withHistory(component: JSX.Element, history?: string) {
  const route = [history ?? '/'];

  return <MemoryRouter initialEntries={route}>{component}</MemoryRouter>; // MemoryRouter что бы имитировать BrowserRouter
}

// HOC обёртка со стором, что бы можно было обернуть нужный к-нт и имитировать стор
type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
};

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {} // хелпер Partial, что бы сделать поля от типа State опциональными. Таким образом тс даст заполнить его частично, передать часть стора.
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<
    State,
    Action<string>,
    ThunkDispatch<State, ReturnType<typeof createAPI>, Action>
  >(middleware);
  const mockStore = mockStoreCreator(initialState);
  return {
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore, // возвращаем ещё сам моковы стор
    mockAxiosAdapter, // и адаптер
  };
}
