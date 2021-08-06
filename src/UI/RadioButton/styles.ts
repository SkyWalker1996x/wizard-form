import styled from 'styled-components';

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  color: ${({ theme }) => theme.colors.gray200};
`;
