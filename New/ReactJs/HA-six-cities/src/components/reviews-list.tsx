import createRate from '../utils/createRate';
import { Review } from '../types';

type ReviewsListProps = {
  comments: Review[];
};

const ReviewsList = ({ comments }: ReviewsListProps) => {
  return (
    <ul className="reviews__list">
      {comments.map((review) => {
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
        <time className="reviews__time" dateTime={date.toString()}>
          {`${date}`}
        </time>
      </div>
    </li>
  );
};

export default ReviewsList;
