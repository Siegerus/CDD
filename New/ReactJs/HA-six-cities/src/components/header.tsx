import { Link } from 'react-router-dom';
import { memo } from 'react';

import Logo from './logo';
import { AppRoute, AuthState } from '../constants';
import { Offer } from '../types/types';
import { useAppSelector } from '../hooks/store';
import { selectOffers } from '../store/selectors/offers';

type HeaderProps = {
  authState?: (typeof AuthState)[keyof typeof AuthState];
  isLoginPage?: boolean;
  isMainPage?: boolean;
};

const Header = memo(function Header({
  authState,
  isLoginPage,
  isMainPage,
}: HeaderProps): JSX.Element {
  const offers = useAppSelector(selectOffers);

  const favoritesOffersCount = offers.filter(
    (offer: Offer) => offer.isFavorite
  ).length;

  return isLoginPage ? (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainPage={isMainPage} />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={AppRoute.FAVORTES}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authState === AuthState.AUTH && (
                    <>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                      <span className="header__favorite-count">
                        {favoritesOffersCount}
                      </span>
                    </>
                  )}
                </Link>
              </li>
              <li className="header__nav-item">
                {authState === AuthState.AUTH ? (
                  <Link className="header__nav-link" to={AppRoute.ROOT}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                ) : (
                  <Link className="header__nav-link" to={AppRoute.LOGIN}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;

// const Header = ({
//   authState,
//   isLoginPage,
//   isMainPage,
// }: HeaderProps): JSX.Element => {
//   const offers = useAppSelector(selectOffers);

//   const favoritesOffersCount = offers.filter(
//     (offer: Offer) => offer.isFavorite
//   ).length;

//   return isLoginPage ? (
//     <header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__left">
//             <Logo />
//           </div>
//         </div>
//       </div>
//     </header>
//   ) : (
//     <header className="header">
//       <div className="container">
//         <div className="header__wrapper">
//           <div className="header__left">
//             <Logo isMainPage={isMainPage} />
//           </div>
//           <nav className="header__nav">
//             <ul className="header__nav-list">
//               <li className="header__nav-item user">
//                 <Link
//                   className="header__nav-link header__nav-link--profile"
//                   to={AppRoute.FAVORTES}>
//                   <div className="header__avatar-wrapper user__avatar-wrapper"></div>
//                   {authState === AuthState.AUTH && (
//                     <>
//                       <span className="header__user-name user__name">
//                         Oliver.conner@gmail.com
//                       </span>
//                       <span className="header__favorite-count">
//                         {favoritesOffersCount}
//                       </span>
//                     </>
//                   )}
//                 </Link>
//               </li>
//               <li className="header__nav-item">
//                 {authState === AuthState.AUTH ? (
//                   <Link className="header__nav-link" to={AppRoute.ROOT}>
//                     <span className="header__signout">Sign out</span>
//                   </Link>
//                 ) : (
//                   <Link className="header__nav-link" to={AppRoute.LOGIN}>
//                     <span className="header__signout">Sign in</span>
//                   </Link>
//                 )}
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// const MemoizedHeader = memo(Header);
// export default MemoizedHeader;
