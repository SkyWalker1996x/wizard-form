import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  padding: 65px 100px;
  background: ${({ theme }) => theme.colors.secondary};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 125px;
  display: flex;
  justify-content: flex-end;
`;
