import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 4px;
  & > label {
    display: flex;
    justify-content: space-between;
    text-align: left;
    font-size: 14px;
    color: ${props => props.theme.colors.gray200};
  }
  & > input {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 12px 10px;
    text-align: left;
    font-size: 14px;
    color: ${props => props.theme.colors.black};
    border: 1px solid ${props => props.theme.colors.blue100};
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.main};
    }
  }
`;
