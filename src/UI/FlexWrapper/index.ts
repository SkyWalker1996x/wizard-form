import styled from 'styled-components';

interface IFlexWrapperProps {
  width?: string,
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  rowGap?: string;
  columnGap?: string;
}

export const FlexWrapper = styled('div')<IFlexWrapperProps>`
  display: flex;
  width: ${props => (props.width ? props.width : '100%')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  row-gap: ${props => (props.rowGap ? props.rowGap : '0')};
  column-gap: ${props => (props.columnGap ? props.columnGap : '0')};
`;
