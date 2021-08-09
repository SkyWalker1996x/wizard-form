import { ReactNode } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import { ValidationError } from '../ValidationError';

import { RadioButtonGroupStyled } from './styles';

interface IRadioButtonGroupProps {
  children: ReactNode;
  label: string;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
}

export const RadioButtonGroup = (props: IRadioButtonGroupProps) => {
  const { children, label, touched, error } = props;

  return (
    <RadioButtonGroupStyled>
      <span>{label}</span>
      {children}

      {touched && error && <ValidationError error={error} />}
    </RadioButtonGroupStyled>
  );
};
