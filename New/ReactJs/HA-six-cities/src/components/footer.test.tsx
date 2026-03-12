import { render, screen } from '@testing-library/react';
import { withHistory } from '../utils/mocks/mock-component';
import Footer from './footer';

describe('Component: footer', () => {
  it('Should render correctly', () => {
    const footerContainerTestId = 'footer-container';

    render(withHistory(<Footer />));

    const footerContainer = screen.getByTestId(footerContainerTestId);

    expect(footerContainer).toBeInTheDocument();
  });
});

export {};
