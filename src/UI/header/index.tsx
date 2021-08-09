import { Navigation } from './Navigation';
import { Logo } from './Logo';

import { HeaderWrapper, HeaderContentWrapper } from './styles';

export const Header = () => (
  <HeaderWrapper>
    <HeaderContentWrapper>
      <Logo />

      <Navigation />
    </HeaderContentWrapper>
  </HeaderWrapper>
);
