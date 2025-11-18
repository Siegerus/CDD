import { Link } from 'react-router-dom';
import { AppRoute } from '../constants';
import { Offer } from '../types';
import createRate from '../utils/createRate';

type CitiesCardProps = {
  offer: Offer;
  cardsClass: string;
  wrapperClass: string;
  viewWidth: string;
  viewHeight: string;
  id?: string;
  onMouseEnterHandle?: (id: string | undefined) => void;
};

const CitiesCard = ({
  offer,
  cardsClass,
  wrapperClass,
  viewWidth,
  viewHeight,
  onMouseEnterHandle,
  id,
}: CitiesCardProps): JSX.Element => {
  const { isPremium, previewImage, price, title, type, rating } = offer;

  return (
    <article
      className={cardsClass}
      onMouseEnter={() => (onMouseEnterHandle ? onMouseEnterHandle(id) : null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div className={wrapperClass}>
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={viewWidth}
            height={viewHeight}
            alt="Place image"
          ></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default CitiesCard;
