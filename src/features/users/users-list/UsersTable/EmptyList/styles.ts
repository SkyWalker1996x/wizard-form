import styled from 'styled-components';

export const EmptyListWrapper = styled.div`
  width: 100%;
  padding: 150px 50px 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 65px;
  background: ${({ theme }) => theme.colors.secondary};
`;
