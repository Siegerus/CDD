import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory } from '../utils/mocks/mock-component';

import NavItem from './nav-item';

describe('Component: NavItem', () => {
  it('Should render correctly', () => {
    const fakeNavItem = { id: 'id', city: 'Paris', isActive: true };
    const { city, id, isActive } = fakeNavItem;
    const navItemTestId = 'navigate-item';
    const mockHandleClick = vi.fn(); // заглушка для ф-ции
    const withHistoryComponent = withHistory(
      <NavItem
        city={city}
        id={id}
        isActive={isActive}
        onNavClick={mockHandleClick}
      />
    );

    render(withHistoryComponent);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
    expect(screen.getByTestId(navItemTestId)).toBeInTheDocument();
    expect(screen.getByText(city)).toBeInTheDocument();
  });

  it('Should have been active by default and call handler, when user click to navigate item', async () => {
    const fakeNavItem = { id: 'id', city: 'Paris', isActive: true };
    const navItemTestId = 'navigate-item';
    const mockHandleClick = vi.fn();
    const preparedComponent = withHistory(
      <NavItem
        city={fakeNavItem.city}
        id={fakeNavItem.id}
        isActive={fakeNavItem.isActive}
        onNavClick={mockHandleClick}
      />
    );

    render(preparedComponent);
    await userEvent.click(screen.getByTestId(navItemTestId));

    expect(mockHandleClick).toBeCalledTimes(1); // проверяем, что заглушка вызвана 1 раз
    expect(mockHandleClick).toHaveBeenCalledWith(fakeNavItem.id); // проверяем, что заглушка вызвана с нужным аргументом
    expect(screen.getByTestId(navItemTestId)).toHaveClass(
      'locations__item-link tabs__item tabs__item--active'
    );
  });

  it('Should not have active-class, when state not active', () => {
    const fakeNavItem = { id: 'id', city: 'Paris', isActive: false };
    const navItemTestId = 'navigate-item';
    const mockHandleClick = vi.fn();
    const preparedComponent = withHistory(
      <NavItem
        city={fakeNavItem.city}
        id={fakeNavItem.id}
        isActive={fakeNavItem.isActive}
        onNavClick={mockHandleClick}
      />
    );

    render(preparedComponent);

    expect(screen.queryByTestId(navItemTestId)).not.toHaveClass(
      'locations__item-link tabs__item tabs__item--active'
    );
  });
});
