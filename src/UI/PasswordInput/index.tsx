import { useCallback, useState, memo, ChangeEvent, FocusEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from 'UI/TextInput/styles';

import showMark from 'assets/show-mark.svg';
import hideMark from 'assets/hide-mark.svg';

export interface IPasswordInputProps {
  onChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  onBlur: {
    (e: FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  label: string;
  value: string;
  required?: boolean;
  name: string;
  id: string;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
}

export const PasswordInput = memo((props: IPasswordInputProps) => {
  const {
    onChange,
    onBlur,
    label = '',
    value = '',
    required = false,
    name,
    id,
    error,
    touched,
  } = props;

  const [isVisible, setVisible] = useState(false);
  const handleVisibleChange = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  return (
    <TextInputWrapper error={!!(touched && error)}>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={isVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && <ValidationError error={error} />}

      <img
        src={isVisible ? hideMark : showMark}
        alt={isVisible ? 'hide password' : 'show password'}
        onClick={handleVisibleChange}
      />
    </TextInputWrapper>
  );
});
