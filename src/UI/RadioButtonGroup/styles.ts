import styled from 'styled-components';

export const RadioButtonGroupStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  color: ${({ theme }) => theme.colors.gray200};
`;
