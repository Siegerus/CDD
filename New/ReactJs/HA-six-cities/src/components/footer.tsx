import Logo from './logo';

const Footer = () => {
  return (
    <footer className="footer container" data-testid="footer-container">
      <Logo isMainPage={false} />
    </footer>
  );
};
export default Footer;
