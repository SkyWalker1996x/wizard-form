import styled from 'styled-components';

interface ITextInputWrapperProps {
  error?: boolean;
}

export const TextInputWrapper = styled('div')<ITextInputWrapperProps>`
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
    color: ${({ theme }) => theme.colors.gray200};
  }
  & > input {
    width: 100%;
    height: 40px;
    padding: 12px 10px;
    box-sizing: border-box;
    text-align: left;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.blue100)};
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main};
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
  & > textarea {
    width: 100%;
    height: 100px;
    padding: 12px 10px;
    text-align: left;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.blue100)};
    resize: none;
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main};
    }
  }
`;
