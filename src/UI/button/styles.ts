import styled from 'styled-components';

export const ButtonStyled = styled.button`
  width: auto;
  padding: 12px 30px;
  background: ${props => props.theme.colors.main};
  border: none;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
