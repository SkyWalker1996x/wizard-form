import styled from 'styled-components';

export const RestorePanelWrapper = styled.div`
  width: 100%;
  padding: 13px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
`;

export const CloseWrapper = styled.span`
  cursor: pointer;
`;
