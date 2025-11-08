import { Link } from 'react-router-dom';
import Logo from './logo';
import { AppRoute, AuthState } from '../constants';

type HeaderProps = {
  authState?: string;
  isLoginPage?: boolean;
  isMainPage?: boolean;
};

function Header({
  authState,
  isLoginPage,
  isMainPage,
}: HeaderProps): JSX.Element {
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
                  to={AppRoute.Favorites}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authState === AuthState.Auth && (
                    <>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                      <span className="header__favorite-count">3</span>
                    </>
                  )}
                </Link>
              </li>
              <li className="header__nav-item">
                {authState === AuthState.Auth ? (
                  <Link className="header__nav-link" to={AppRoute.Root}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                ) : (
                  <Link className="header__nav-link" to={AppRoute.Login}>
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
}

export default Header;
