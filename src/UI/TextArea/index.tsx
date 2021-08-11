import { memo } from 'react';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from 'UI/TextInput/styles';

import { IPasswordInputProps } from 'UI/PasswordInput';

export const TextArea = memo((props: IPasswordInputProps) => {
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

  return (
    <TextInputWrapper error={!!(touched && error)}>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <textarea id={id} value={value} onChange={onChange} name={name} onBlur={onBlur} />
      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
});
