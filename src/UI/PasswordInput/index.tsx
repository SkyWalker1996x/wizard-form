import { useCallback, useState, memo } from 'react';

import { ValidationError } from 'UI/ValidationError';

import { TextInputWrapper } from 'UI/TextInput/styles';

import { FixTypeLater } from 'types';

import showMark from 'assets/show-mark.svg';
import hideMark from 'assets/hide-mark.svg';

export const PasswordInput = memo((props: FixTypeLater) => {
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

  const [isVisible, setVisible] = useState(false);
  const handleVisibleChange = useCallback(() => {
    setVisible(prev => !prev);
  }, []);

  return (
    <TextInputWrapper error={touched && error}>
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
