import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormWrapper = styled.div`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  padding: 65px 100px;
  background: ${props => props.theme.colors.secondary};
`;