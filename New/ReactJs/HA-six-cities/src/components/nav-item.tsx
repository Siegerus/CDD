import { NavItemType } from '../types/types';

type NavItemProps = NavItemType & {
  id: string;
  onNavClick: (id: string) => void;
};

const NavItem = ({
  city,
  isActive,
  onNavClick,
  id,
}: NavItemProps): JSX.Element => {
  return (
    <li className="locations__item">
      <a
        data-testid="navigate-item"
        className={
          isActive
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
        onClick={() => onNavClick(id)}>
        <span>{city}</span>
      </a>
    </li>
  );
};

export default NavItem;
