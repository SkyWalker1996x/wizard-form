import { ChangeEvent } from 'react';

import { FlexWrapper } from 'UI/FlexWrapper';

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

export const CheckBox = (props: IRadioButtonProps) => {
  const { id, name, value, onChange, checked } = props;

  return (
    <FlexWrapper
      color={'gray200'}
      flexDirection={'row'}
      alignItems={'center'}
      columnGap={'10px'}
    >
      <input id={id} name={name} type="checkbox" onChange={onChange} value={value} checked={checked}/>
      <label htmlFor={id}>{value}</label>
    </FlexWrapper>
  );
};
