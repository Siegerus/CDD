import { NavItemType } from '../types';
// onClick: (id: string) => void;
// type NavItemProps = Omit<NavItemType, 'id'>;
type NavItemProps = NavItemType & {
  id: string;
  onNavClick: (id: string, city: string) => void;
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
        className={
          isActive
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
        onClick={() => onNavClick(id, city)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

export default NavItem;
