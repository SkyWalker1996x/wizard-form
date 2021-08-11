import styled from 'styled-components';
import addMark from 'assets/add-mark.svg';

export const UploadLabel = styled.label`
  position: relative;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ theme }) => theme.fontSizes.main};
  cursor: pointer;
  &:before {
    content: url(${addMark});
    position: absolute;
    top: 3px;
    left: -20px;
  }
`;
