import { TextInputWrapper } from './styles';
import { FixTypeLater } from 'types';

export const TextInput = (props: FixTypeLater) => {
  const {
    onChange = () => {},
    label = '',
    value = '',
    type = 'text',
    required = false,
  } = props;

  return (
    <TextInputWrapper>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <input type={type} value={value} onChange={onChange} />
    </TextInputWrapper>
  );
};
