import { render, screen } from '@testing-library/react';
import { Component } from 'react';
import NavItem from './nav-item';

describe('Component: NavItem', () => {
  it('Should render correctly', () => {
    const navItemContainerTestId = 'nav-item container';
    // render(<NavItem />);

    expect(screen.getByTestId(navItemContainerTestId)).toBeInTheDocument();
  });
});
