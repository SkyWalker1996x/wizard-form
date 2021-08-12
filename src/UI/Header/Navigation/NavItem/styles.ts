import styled from 'styled-components';
import { FlexWrapper } from 'UI/FlexWrapper';

interface INavItemProps {
  active?: boolean;
}

export const NavItemWrapper = styled(FlexWrapper)<INavItemProps>`
  padding: 5px;
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  cursor: pointer;
`;
