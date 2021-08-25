import { memo } from 'react';
import InputMaskLib from 'react-input-mask';

import { TextInputWrapper } from 'UI/TextInput/styles';
import { IPasswordInputProps } from 'UI/PasswordInput';
import { ValidationError } from 'UI/ValidationError';

import { DEFAULT_INPUT_MASK } from 'app/app-constants';

interface IInputMask extends IPasswordInputProps {
  mask?: string;
}

export const InputMask = memo((props: IInputMask) => {
  const {
    label,
    required,
    onBlur,
    onChange,
    error,
    touched,
    id,
    name,
    value,
    mask = DEFAULT_INPUT_MASK,
  } = props;

  return (
    <TextInputWrapper error={!!(touched && error)}>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <InputMaskLib
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        mask={mask}
      />
      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
});
