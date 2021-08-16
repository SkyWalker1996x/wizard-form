import { useHistory } from 'react-router-dom';

import logo from 'assets/logo.svg';

import { LogoWrapper } from './styles';
import { useCallback } from 'react';

export const Logo = () => {
  const { push } = useHistory();

  const onPathChange = useCallback(
    (path: string) => {
      push(path);
    },
    [push]
  );

  return (
    <LogoWrapper onClick={() => onPathChange('/')}>
      <img src={logo} alt="logo" />
    </LogoWrapper>
  );
};
