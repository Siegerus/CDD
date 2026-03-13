import { render, screen } from '@testing-library/react';
import { Component } from 'react';
import { withHistory } from '../utils/mocks/mock-component';

import NavItem from './nav-item';

describe('Component: NavItem', () => {
  it('Should render correctly', () => {
    const navItemContainerTestId = 'nav-item container';
    const withHistoryComponent = withHistory(<NavItem />);
    render(withHistoryComponent);

    expect(screen.getByTestId(navItemContainerTestId)).toBeInTheDocument();
  });
});
