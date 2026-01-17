import React from 'react';
import { reviewItems } from '../mocks/reviews';
import { Review } from '../types';

type ReviewsListProps = {};

const ReviewsList = (props: ReviewsListProps) => {
  return (
    <ul className="reviews__list">
      {reviewItems.map((review) => {
        return <ReviewItem key={review.id} avatar={review.user.avatarUrl} />;
      })}
    </ul>
  );
};

type ReviewItemProps = {
  avatar: string;
};

const ReviewItem = ({ avatar }: ReviewItemProps) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width="54"
            height="54"
            alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">Max</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century.
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          April 2019
        </time>
      </div>
    </li>
  );
};

export default ReviewsList;
