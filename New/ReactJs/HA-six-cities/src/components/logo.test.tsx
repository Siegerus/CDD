import { render, screen } from '@testing-library/react';
import { withHistory } from '../utils/mocks/mock-component';
import Logo from './logo';

describe('Component: Logo', () => {
  it('Should render correctly on main page', () => {
    const expectedIsMainPageProp = true;
    const expectedAltText = '6 cities logo';
    const logoLinkDataTestId = 'logo-link'; // можно найти элемент по data-testid
    const preperedComponent = withHistory(
      <Logo isMainPage={expectedIsMainPageProp} />
    );
    // withHistory - HOC, возвращает передаваемый к-нт с BrouserRouter, что бы не падал тест
    render(preperedComponent);

    expect(screen.getByTestId(logoLinkDataTestId)).toBeInTheDocument();
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
  it('Should render correctly on favorite page', () => {
    const expectedIsMainPageProp = false;
    const expectedAltText = '6 cities logo';
    const logoLinkDataTestId = 'logo-link';
    const preperedComponent = withHistory(
      <Logo isMainPage={expectedIsMainPageProp} />
    );
    render(preperedComponent);

    expect(screen.getByTestId(logoLinkDataTestId)).toBeInTheDocument();
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
