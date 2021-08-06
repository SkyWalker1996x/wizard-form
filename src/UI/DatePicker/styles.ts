import styled from 'styled-components';
import DatePickerLib from 'react-date-picker';
import { FixTypeLater } from 'types';

export const DatePickerStyled = styled<FixTypeLater>(DatePickerLib)`
  // input style
  & > div {
    color: ${({ theme }) => theme.colors.gray100};
    border: 1px solid
      ${({ error, theme }) => (error ? theme.colors.error : theme.colors.blue100)};
    height: 40px;
    width: 190px;
    padding-left: 5px;
    background: ${({ theme }) => theme.colors.white};
  }

  & > div > div > input {
    outline: none;
    color: ${({ theme }) => theme.colors.gray100};
  }

  // calendar style
  & > span > .react-date-picker__calendar > .react-calendar {
    color: ${({ theme }) => theme.colors.gray100};
    font-size: 9px;
    text-decoration: none;
    margin-top: 10px;
    background: ${({ theme }) => theme.colors.white};
    border: none;

    & div abbr {
      text-decoration: none;
      font-size: 9px;
    }

    & .react-calendar__navigation__label {
      color: ${({ theme }) => theme.colors.gray300};
      font-size: 17px;
      font-weight: 500;
    }
  }
`;
