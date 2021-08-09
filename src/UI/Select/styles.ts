import styled from 'styled-components';
import SelectLib from 'react-select';

export const SelectStyled = styled(SelectLib)`
  & .Select__control {
    border-color: ${props => props.theme.colors.blue100};
    border-radius: 0;
  }
`;
