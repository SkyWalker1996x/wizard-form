import styled from 'styled-components';

interface IFormNavItemProps {
  active: boolean;
  completed: boolean;
}

export const FormNavigationWrapper = styled.div`
  width: 100%;
  /*position: absolute;
  top: 0;
  left: 0;*/
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const FormNavItem = styled.div<IFormNavItemProps>`
  flex-shrink: 1;
  padding: 16px 5px;
  text-align: center;
  background: ${({ theme, active }) =>
    active ? theme.colors.main : theme.opacityColors.blue300};
  color: ${({ theme, active, completed }) =>
    active ? theme.colors.white : completed ? theme.colors.black : theme.colors.gray100};
  font-size: 24px;
  font-weight: 700;
`;
