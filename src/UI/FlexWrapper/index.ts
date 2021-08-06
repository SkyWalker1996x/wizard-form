import styled from 'styled-components';
import { FixTypeLater } from 'types';

export const FlexWrapper = styled<FixTypeLater>('div')`
  display: flex;
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  row-gap: ${props => (props.rowGap ? props.rowGap : '0')};
  column-gap: ${props => (props.columnGap ? props.columnGap : '0')};
`;
