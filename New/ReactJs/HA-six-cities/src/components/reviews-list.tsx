import { reviewItems } from '../mocks/reviews';
import createRate from '../utils/createRate';
import getIntendedDate from '../utils/getIntendedDate';

type ReviewsListProps = {};

const ReviewsList = (props: ReviewsListProps) => {
  return (
    <ul className="reviews__list">
      {reviewItems.map((review) => {
        return (
          <ReviewItem
            key={review.id}
            avatar={review.user.avatarUrl}
            date={review.date}
            comment={review.comment}
            userName={review.user.name}
            rating={review.rating}
          />
        );
      })}
    </ul>
  );
};

type ReviewItemProps = {
  avatar: string;
  date: string;
  comment: string;
  userName: string;
  rating: number;
};

const ReviewItem = (props: ReviewItemProps) => {
  const { avatar, date, comment, userName, rating } = props;
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
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: createRate(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time
          className="reviews__time"
          dateTime={getIntendedDate(date).fullDate}>
          {`${getIntendedDate(date).monthName} ${getIntendedDate(date).year}`}
        </time>
      </div>
    </li>
  );
};

export default ReviewsList;
