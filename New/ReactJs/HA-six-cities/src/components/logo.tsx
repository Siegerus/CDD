import { Link } from 'react-router-dom';
import { AppRoute } from '../constants';

type LogoProps = {
  isMainPage?: boolean;
};

const Logo = ({ isMainPage }: LogoProps): JSX.Element => {
  return isMainPage ? (
    <a
      className="header__logo-link header__logo-link--active"
      data-testid="logo-link">
      {/* data-testid для теста */}
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"></img>
    </a>
  ) : (
    <Link
      to={AppRoute.ROOT}
      className="header__logo-link"
      data-testid="logo-link">
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"></img>
    </Link>
  );
};

export default Logo;
