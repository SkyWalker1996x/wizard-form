import { memo } from 'react';

import { NavItemWrapper } from './styles';

interface INavItemProps {
  text: string;
  icon?: string | undefined;
  active: boolean;
  onClick: () => void;
}

export const NavItem = memo((props: INavItemProps) => {
  const { text, icon, active, onClick } = props;

  return (
    <NavItemWrapper active={active} columnGap="8px" alignItems="center" onClick={onClick}>
      {icon && <img src={icon} alt={text} />}
      <span>{text}</span>
    </NavItemWrapper>
  );
});
