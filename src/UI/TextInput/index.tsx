import { memo } from 'react';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from './styles';

import { IPasswordInputProps } from 'UI/PasswordInput';

interface ITextInputProps extends Partial<IPasswordInputProps> {
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
    value = undefined,
    type = 'text',
    required = false,
    name,
    id,
    error,
    touched,
    defaultValue = undefined,
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
        defaultValue={defaultValue}
      />
      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
});
