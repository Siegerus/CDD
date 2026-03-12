import { useState, ChangeEvent, MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useActionCreators } from '../hooks/store';
import { commentsActions } from '../store/slices/comments';
import { Review } from '../types/types';
import { COMMENT_TEXT_AMOUNT } from '../constants';

const Form = () => {
  const { sendComment } = useActionCreators(commentsActions);

  const [values, setValues] = useState({
    review: '',
    rating: '',
  });

  const commentObject: Review = {
    id: uuidv4(),
    date: new Date().toString(),
    user: {
      name: 'John',
      avatarUrl: '../../markup/img/avatar.svg',
      isPro: false,
    },
    comment: values.review,
    rating: +values.rating,
  };

  const onInputChangeHandle = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    name: string
  ) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const formSubmitHandle = (e: MouseEvent) => {
    e.preventDefault();
    sendComment(commentObject);
    setValues({ review: '', rating: '' });
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          data-testid="starElement"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, e.target.name)}></input>
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          data-testid="starElement"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, e.target.name)}></input>
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          data-testid="starElement"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, e.target.name)}></input>
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          data-testid="starElement"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, e.target.name)}></input>
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          data-testid="starElement"
          type="radio"
          onChange={(e) => onInputChangeHandle(e, e.target.name)}></input>
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        data-testid="commentElement"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(e) => onInputChangeHandle(e, e.target.name)}
        value={values.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {COMMENT_TEXT_AMOUNT} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          onClick={(e) => formSubmitHandle(e)}
          disabled={!values.review}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
