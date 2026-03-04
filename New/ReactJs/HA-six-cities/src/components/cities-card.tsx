import { generatePath, Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthState } from '../constants';
import { Offer } from '../types/types';
import createRate from '../utils/createRate';

type CitiesCardProps = {
  authState?: (typeof AuthState)[keyof typeof AuthState];
  offer: Offer;
  cardsClass: string;
  wrapperClass: string;
  viewWidth: string;
  viewHeight: string;
  id?: string;
  onMouseEnterHandle?: (id: string) => void;
  onClickFavoriteHandle?: (id: string) => void;
};

const CitiesCard = ({
  authState,
  offer,
  cardsClass,
  wrapperClass,
  viewWidth,
  viewHeight,
  onMouseEnterHandle,
  onClickFavoriteHandle,
  id,
}: CitiesCardProps): JSX.Element => {
  const { isPremium, isFavorite, images, price, title, type, rating } = offer;

  const navigate = useNavigate();

  const buttonClass = isFavorite
    ? 'place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const onButtonClickHandle = (
    id: string,
    authState: (typeof AuthState)[keyof typeof AuthState]
  ) => {
    if (onClickFavoriteHandle && authState === AuthState.AUTH)
      onClickFavoriteHandle(id!);
    else navigate(AppRoute.LOGIN);
  };

  return (
    <article
      className={cardsClass}
      onMouseEnter={() => {
        if (onMouseEnterHandle) onMouseEnterHandle(id!);
      }}
      onMouseLeave={() => {
        if (onMouseEnterHandle) onMouseEnterHandle('');
      }}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={wrapperClass}>
        <Link to={generatePath(AppRoute.OFFER, { id: offer.id })}>
          <img
            className="place-card__image"
            src={images[0]}
            width={viewWidth}
            height={viewHeight}
            alt="Place image"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={() => onButtonClickHandle(id!, authState!)}
            className={buttonClass}
            type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: createRate(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.OFFER, { id: offer.id })}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default CitiesCard;
