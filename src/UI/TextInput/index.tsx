import { memo } from 'react';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from './styles';

import { FixTypeLater } from 'types';

export const TextInput = memo((props: FixTypeLater) => {
  const {
    onChange = () => {},
    onBlur = () => {},
    label = '',
    value = '',
    type = 'text',
    required = false,
    name = 'name',
    id = 'id',
    error,
    touched,
  } = props;

  return (
    <TextInputWrapper error={touched && error}>
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
