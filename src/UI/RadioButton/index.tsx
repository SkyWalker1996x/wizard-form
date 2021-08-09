import { ChangeEvent } from 'react';

import { RadioButtonWrapper } from './styles';

interface IRadioButtonProps {
  id: string;
  name: string;
  value: string;
  onChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}

export const RadioButton = (props: IRadioButtonProps) => {
  const { id, name, value, onChange = () => {} } = props;

  return (
    <RadioButtonWrapper>
      <input id={id} name={name} type="radio" onChange={onChange} value={value} />
      <label htmlFor={id}>{value}</label>
    </RadioButtonWrapper>
  );
};
