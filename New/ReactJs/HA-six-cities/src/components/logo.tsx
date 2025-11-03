import { Link } from 'react-router-dom';
import { Paths } from '../constants';

const Logo = () => {
  return (
    <Link
      to={Paths.Root}
      className="header__logo-link header__logo-link--active"
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      ></img>
    </Link>
  );
};

export default Logo;
