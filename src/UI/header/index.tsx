import { Navigation } from './navigation';
import { Logo } from './logo';

import { HeaderWrapper, HeaderContentWrapper } from './styles';

export const Header = () => (
  <HeaderWrapper>
    <HeaderContentWrapper>
      <Logo />

      <Navigation />
    </HeaderContentWrapper>
  </HeaderWrapper>
);
