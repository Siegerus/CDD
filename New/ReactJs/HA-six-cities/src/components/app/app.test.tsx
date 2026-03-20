import { internet, name } from 'faker';
import { screen, render } from '@testing-library/react';
import { AppRoute, NAV_ITEMS } from '../../constants';
import { withHistory, withStore } from '../../utils/mocks/mock-component';
import { makeFakeStore } from '../../utils/mocks/makeFakeStore';
import { makeFakeOffer } from '../../utils/mocks/makeFakeOffer';
import App from '../app/app';

// Тест маршрутизации. По аналогии тестируются все к-нты

// Вместо теста реальных к-тов, можно их замокать с vi.mock, как ниже.
vi.mock('../../pages/offer-page/offer-page.tsx', () => {
  const mockOfferPage = () => <span>OfferPage component</span>;
  return {
    default: mockOfferPage,
  };
});

describe('Applicaion Routing', () => {
  //  с vi.mock
  it(`Should render "OfferPage" when user navigate to "/offer/${
    makeFakeOffer().id
  }"`, () => {
    const withHistoryComponent = withHistory(<App />, AppRoute.OFFER);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText('OfferPage component')).toBeInTheDocument();
  });
  // без с vi.mock
  it('Should render "MainPage" when user navigate to "/"', async () => {
    const withHistoryComponent = withHistory(<App />, AppRoute.ROOT);
    const { withStoreComponent, mockStore } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );
    const offersCount = mockStore.getState().offers.offers.length;

    render(withStoreComponent);

    expect(
      screen.getByText(
        new RegExp(`${offersCount} places to stay in ${NAV_ITEMS[0].city}`, 'i') // по регулярке
        // `${offersCount} places to stay in ${NAV_ITEMS[0].city}`  // по обычной строке
      )
    ).toBeInTheDocument();
  });

  it('Should render "LoginPage" when user navigate to "/login"', async () => {
    const emailPlaceholderText = 'Email';
    const passwordPlaceholderText = 'Password';
    const withHistoryComponent = withHistory(<App />, AppRoute.LOGIN);
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(
      screen.getByPlaceholderText(emailPlaceholderText)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(passwordPlaceholderText)
    ).toBeInTheDocument();
    expect(screen.getByTestId('login-section')).toBeInTheDocument();
  });
  it('Should render "ErrorPage" when user navigate to non-existent route', async () => {
    const withHistoryComponent = withHistory(<App />, '/unknown-route');
    const { withStoreComponent } = withStore(
      withHistoryComponent,
      makeFakeStore()
    );

    render(withStoreComponent);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByText('Такой страницы не существует...')
    ).toBeInTheDocument();
  });
});
