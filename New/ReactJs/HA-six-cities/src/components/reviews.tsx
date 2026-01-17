import React from 'react';
import Form from './form';
import ReviewsList from '../components/reviews-list';
import { AuthState } from '../constants';

type ReviewsProps = {
  authState: string;
};

const Reviews = ({ authState }: ReviewsProps) => {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">1</span>
      </h2>
      <ReviewsList />
      {authState === AuthState.Auth && <Form />}
    </section>
  );
};

export default Reviews;
