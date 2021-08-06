import { RadioButtonGroupStyled } from './styles';

import { FixTypeLater } from 'types';

export const RadioButtonGroup = (props: FixTypeLater) => {
  const { children, label } = props;

  return (
    <RadioButtonGroupStyled>
      <span>{label}</span>
      {children}
    </RadioButtonGroupStyled>
  );
};
