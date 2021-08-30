import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormWrapper = styled.form`
  position: relative;
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 65px;  
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 10px 100px;
  display: flex;
  justify-content: flex-end;
  column-gap: 100px;
  flex: 1 1 0;
`;
