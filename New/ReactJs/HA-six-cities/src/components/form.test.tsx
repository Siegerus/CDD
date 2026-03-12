import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../utils/mocks/mock-component';
import Form from './form';

describe('Component: Form', () => {
  it('Should render correctly', () => {
    const expectedTextAmount = 50;
    const reviewTextAmountText = `${expectedTextAmount} characters`;
    const reviewLabelText = 'Your review';
    const reviewHelpText = 'To submit review please make sure to set';
    const ratingText = 'and describe your stay with at least';

    const preparedComponent = withHistory(<Form />);

    render(preparedComponent);
  });
});
