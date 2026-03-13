import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../utils/mocks/mock-component';
import Form from './form';

describe('Component: Form', () => {
  it('Should render correctly', () => {
    const expectedTextAmount = 50;
    const expectedReviewTextAmountText = `${expectedTextAmount} characters`;
    const reviewLabelText = 'Your review';
    // const expectedReviewHelpText = 'To submit review please make sure to set';
    // const expectedRatingText = 'and describe your stay with at least';
    const { withStoreComponent } = withStore(<Form />, {}); // Оборачиваем к-нт и в HOC со стором
    const preparedComponent = withHistory(withStoreComponent); // и с хистори

    render(preparedComponent);
    const commentElement = screen.getByTestId('commentElement');
    const starElements = screen.getAllByTestId('starElement');

    expect(commentElement).toBeInTheDocument();
    expect(starElements.length).toBe(5);
    expect(screen.getByText(expectedReviewTextAmountText)).toBeInTheDocument();
    expect(screen.getByText(reviewLabelText)).toBeInTheDocument();
  });

  it('Should render correctly, when user enter comment', async () => {
    const commentElementTestId = 'commentElement';
    const expectedCommentValue = 'Lorem ipsum dolor sit amet consectetur';
    const { withStoreComponent } = withStore(<Form />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    // userEvent позволяет имитировать приближённое к настоящему поведение пользоватяям
    // метод type позволяет имитировать ввод текста
    await userEvent.type(
      screen.getByTestId(commentElementTestId), // 1й аргумент - элемент, куда вводится текст
      expectedCommentValue // 2й - значение, которое вводится
    );

    // После того, как сымитировали ввод, проверяем, что это значение есть в документе
    expect(screen.getByDisplayValue(expectedCommentValue)).toBeInTheDocument();
  });
});
