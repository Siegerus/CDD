import Form from './form';
import ReviewsList from '../components/reviews-list';
import { AuthState } from '../constants';
import { Review } from '../types/types';

type ReviewsProps = {
  authState: string;
  comments: Review[];
};

const Reviews = ({ authState, comments }: ReviewsProps) => {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ReviewsList comments={comments} />
      {authState === AuthState.AUTH && <Form />}
    </section>
  );
};

export default Reviews;
