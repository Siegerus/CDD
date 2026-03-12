import { render, screen } from '@testing-library/react';
import LoadingSpinner from './loading-spinner';

describe('Component: Loading screen', () => {
  it('Should render correcly', () => {
    // Проверяем, что текст есть на экране.
    // Используем регулярки. i - текст регистронезависим.
    const expectedText = /loading/i;

    render(<LoadingSpinner />);

    // сама проверка
    // С помощью screen можно находить элементы, которые получились врезультате отрисовки к-та.
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
