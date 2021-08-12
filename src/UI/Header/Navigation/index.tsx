import { useLocation, useHistory } from 'react-router-dom';
import { useCallback } from 'react';

import { HEADER_NAV } from 'app/app-constants';

import { NavItem } from './NavItem';

import { NavWrapper } from './styles';

export const Navigation = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();

  const onPathChange = useCallback((path: string) => {
    push(path);
  }, [push]);

  return (
    <NavWrapper>
      {HEADER_NAV.map(({ text, id, path, icon }) => {
        return (
          <NavItem
            key={id}
            text={text}
            active={path === pathname}
            icon={icon}
            onClick={() => onPathChange(path)}
          />
        );
      })}
    </NavWrapper>
  );
};
