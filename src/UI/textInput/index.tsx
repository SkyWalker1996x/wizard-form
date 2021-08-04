import { ValidationError } from 'UI/validationError';

import { TextInputWrapper } from './styles';

import { FixTypeLater } from 'types';

export const TextInput = (props: FixTypeLater) => {
  const {
    onChange = () => {},
    label = '',
    value = '',
    type = 'text',
    required = false,
    name = 'name',
    id = 'id',
    error,
  } = props;

  return (
    <TextInputWrapper>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input id={id} type={type} value={value} onChange={onChange} name={name} />
      {error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
};
