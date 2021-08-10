import styled from 'styled-components';
import SelectLib from 'react-select';

export const SelectStyled = styled(SelectLib)<{ error: boolean }>`
  & .Select__control {
    border-color: ${({ theme, error }) =>
      error ? theme.colors.error : theme.colors.blue100};
    border-radius: 0;
  }
`;
