import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
      <div>Такой страницы не существует... 404</div>
      <Link to="/">Вернуться на главную страницу</Link>
    </>
  );
};

export default Page404;
