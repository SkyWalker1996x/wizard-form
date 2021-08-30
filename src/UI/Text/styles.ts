import styled from 'styled-components';

interface ITextWrapper {
  textAlign?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  cursor?: string;
}

export const TextWrapper = styled.span<ITextWrapper>`
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.black)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
  cursor: ${({ cursor }) => (cursor ? cursor : 'default')};
`;
