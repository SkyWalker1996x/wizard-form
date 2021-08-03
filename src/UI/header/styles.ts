import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  background: radial-gradient(
    50% 28800% at 50% 68.33%,
    ${props => props.theme.gradients.main[0]} 0%,
    ${props => props.theme.gradients.main[1]} 100%
  );
  box-shadow: 0px 1px 5px ${props => props.theme.colors.shadow};
`;

export const HeaderContentWrapper = styled.div`
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  justify-content: space-between;
`;
