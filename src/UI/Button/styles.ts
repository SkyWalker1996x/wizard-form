import styled from 'styled-components';

interface IButtonStyledProps {
  background?: string | undefined;
  width?: string;
}

export const ButtonStyled = styled('button')<IButtonStyledProps>`
  width: ${({ width }) => (width ? width : '110px')};
  padding: 12px 30px;
  background: ${({ theme, background }) =>
    background ? theme.colors[background] : theme.colors.main};
  border: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
