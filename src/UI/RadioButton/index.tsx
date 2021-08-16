import { ChangeEvent } from 'react';

import { RadioButtonWrapper } from './styles';

interface IRadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}

export const RadioButton = (props: IRadioButtonProps) => {
  const { id, name, value, onChange, checked } = props;

  return (
    <RadioButtonWrapper>
      <input
        id={id}
        name={name}
        type="radio"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <label htmlFor={id}>{value}</label>
    </RadioButtonWrapper>
  );
};
