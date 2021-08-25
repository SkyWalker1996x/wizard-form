import styled from 'styled-components';
import { FlexWrapper } from 'UI/FlexWrapper';

export const ModalBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled(FlexWrapper)`
  width: 60%;
  padding: 20px;
  background: ${({ theme }) => theme.colors.blue100};
`;
