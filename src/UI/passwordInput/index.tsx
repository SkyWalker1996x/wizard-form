import { useState } from 'react';

import { ValidationError } from 'UI/validationError';

import { TextInputWrapper } from '../textInput/styles';

import { FixTypeLater } from 'types';

export const PasswordInput = (props: FixTypeLater) => {
  const {
    onChange = () => {},
    onBlur = () => {},
    label = '',
    value = '',
    required = false,
    name = 'name',
    id = 'id',
    error,
    touched,
  } = props;

  console.log('touched', touched);

  const [isVisible, setVisible] = useState(false);
  const handleVisibleChange = () => {
    setVisible(prev => !prev);
  };

  return (
    <TextInputWrapper>
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
      <button onClick={handleVisibleChange}>
        {isVisible ? 'hide password' : 'show password'}
      </button>
    </TextInputWrapper>
  );
};
