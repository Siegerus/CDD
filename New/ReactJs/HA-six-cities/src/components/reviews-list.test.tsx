import { screen, render } from '@testing-library/react';
import { makeFakeComments } from '../utils/mocks/makeFakeComments';
import * as utils from '../utils/createRate';
import ReviewsList from './reviews-list';

describe('Component: ReviewsList', () => {
  it('Should render list correctly', () => {
    const reviewsContainerTestId = 'reviews-container';
    const reviewAvatarAltText = 'Reviews avatar';
    const fakeComments = [makeFakeComments()];

    render(<ReviewsList comments={fakeComments} />);

    expect(screen.getByTestId(reviewsContainerTestId)).toBeInTheDocument();
    expect(screen.getAllByAltText(reviewAvatarAltText).length).toBe(
      fakeComments.length
    );
  });

  it('Should render item coorectly', () => {
    const fakeComment = makeFakeComments();
    const userNameText = fakeComment.user.name;
    const timeText = fakeComment.date;

    render(<ReviewsList comments={[fakeComment]} />);

    expect(screen.getByText(userNameText)).toBeInTheDocument();
    expect(screen.getByText(timeText)).toBeInTheDocument();
  });

  it('Should called create-rating function for each comment', () => {
    const mockCreateRateFunction = vi.spyOn(utils, 'createRate');

    render(<ReviewsList comments={[makeFakeComments(), makeFakeComments()]} />);

    expect(mockCreateRateFunction).toBeCalledTimes(2);
  });
});
