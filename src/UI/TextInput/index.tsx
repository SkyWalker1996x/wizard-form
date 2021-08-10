import { memo } from 'react';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from './styles';

import { IPasswordInputProps } from 'UI/PasswordInput';

interface ITextInputProps extends IPasswordInputProps {
  type?:
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url';
}

export const TextInput = memo((props: ITextInputProps) => {
  const {
    onChange,
    onBlur,
    label = '',
    value = '',
    type = 'text',
    required = false,
    name,
    id,
    error,
    touched,
  } = props;

  return (
    <TextInputWrapper error={!!(touched && error)}>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />
      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
});
