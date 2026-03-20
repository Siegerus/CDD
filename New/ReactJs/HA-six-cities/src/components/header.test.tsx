import { screen, render } from '@testing-library/react';
import { AuthState, LoadingStatus } from '../constants';
import { Offer } from '../types/types';
import { makeFakeOffer } from '../utils/mocks/makeFakeOffer';
import { withHistory, withStore } from '../utils/mocks/mock-component';
import Header from './header';

vi.mock('../components/logo.tsx', () => {
  // тестируем vi.mock. При обращении по пути в 1ом параметре, будет возвращатсья спан с текстом вместо к-та Logo
  const renderedInstead = () => <span>rendered instead Logo component</span>;
  return {
    default: renderedInstead,
  };
});

describe('Component: Header', () => {
  it('Should render vi.mock instead Logo component', () => {
    const expectedText = 'rendered instead Logo component';
    const { withStoreComponent } = withStore(<Header />, {
      offers: {
        offers: [makeFakeOffer()],
        acitveCard: '',
        loadingStatus: LoadingStatus.IDLE,
        navs: [],
      },
    });
    const preperedComponent = withHistory(withStoreComponent);

    render(preperedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument(); // проверям, что спан отрисовался вместо Logo
  });

  it('Should show favorites offers count', () => {
    const expectedFavoriteOffersCount = 2;
    const conterElemetTestId = 'counter';
    const fakeFavoriteOffer = {
      ...makeFakeOffer(),
      isFavorite: true,
    };
    const { withStoreComponent, mockStore } = withStore(
      <Header authState={AuthState.AUTH} />,
      {
        offers: {
          //  помещаем фейковые офферы в фейковый стор
          offers: [
            fakeFavoriteOffer,
            makeFakeOffer(),
            fakeFavoriteOffer,
            makeFakeOffer(),
          ],
          acitveCard: '',
          loadingStatus: LoadingStatus.IDLE,
          navs: [],
        },
      }
    );
    const preperedComponent = withHistory(withStoreComponent);
    const favoritesOffersCount = mockStore
      .getState()
      .offers.offers.filter((offer: Offer) => offer.isFavorite).length;
    render(preperedComponent);

    expect(screen.getByTestId(conterElemetTestId)).toBeInTheDocument();
    expect(favoritesOffersCount).toBe(expectedFavoriteOffersCount); // получаем кол-во офферов из фейкового стора
    expect(screen.getByText(expectedFavoriteOffersCount)).toBeInTheDocument();
  });
});
