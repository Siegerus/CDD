import { NavItemType } from '../types';
// onClick: (id: string) => void;
// type NavItemProps = Omit<NavItemType, 'id'>;
type NavItemProps = NavItemType & {
  id: string;
  onClick: (id: string) => void;
};

const NavItem = ({
  city,
  isActive,
  onClick,
  id,
}: NavItemProps): JSX.Element => {
  // console.log(id)
  return (
    <li className="locations__item">
      <a
        className={
          isActive
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
        onClick={() => onClick(id)}
      >
        <span>{city}</span>
      </a>
    </li>
  );
};

export default NavItem;
