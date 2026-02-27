import { AppRoute } from '../../constants';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Такой страницы не существует...</h1>
      <span
        style={{ display: 'block', fontSize: '68px ', textAlign: 'center' }}>
        404
      </span>
      <Link
        style={{ display: 'block', color: 'blue', textAlign: 'center' }}
        to={AppRoute.ROOT}>
        Вернуться на главную страницу
      </Link>
    </>
  );
};

export default ErrorPage;
