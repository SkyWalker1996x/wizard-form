import { RadioButtonWrapper } from './styles';

import { FixTypeLater } from 'types';

export const RadioButton = (props: FixTypeLater) => {
  const { id, name, value, onChange = () => {} } = props;

  return (
    <RadioButtonWrapper>
      <input id={id} name={name} type="radio" onChange={onChange} value={value} />
      <label htmlFor={id}>{value}</label>
    </RadioButtonWrapper>
  );
};
