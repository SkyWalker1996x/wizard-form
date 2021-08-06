import { RadioButtonGroupStyled } from './styles';

import { FixTypeLater } from 'types';
import { ValidationError } from '../ValidationError';

export const RadioButtonGroup = (props: FixTypeLater) => {
  const { children, label, touched, error } = props;

  return (
    <RadioButtonGroupStyled>
      <span>{label}</span>
      {children}

      {touched && error && <ValidationError error={error} />}
    </RadioButtonGroupStyled>
  );
};
