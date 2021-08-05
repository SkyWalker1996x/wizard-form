import styled from 'styled-components';

import { FixTypeLater } from 'types';

interface ITextInputWrapperProps {
  error: boolean;
}

export const TextInputWrapper = styled<FixTypeLater>('div')`
  position: relative;
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
    width: 100%;
    height: 40px;
    padding: 12px 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    color: ${props => props.theme.colors.black};
    border: 1px solid
      ${props => (props.error ? props.theme.colors.error : props.theme.colors.blue100)};
    &:focus {
      outline: none;
      border-color: ${props => props.theme.colors.main};
    }
  }
  & > img {
    width: 15px;
    height: 10px;
    position: absolute;
    right: 13px;
    top: 38px;
    z-index: 1;
  }
`;
