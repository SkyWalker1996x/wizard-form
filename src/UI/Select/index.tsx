import { FocusEvent, memo } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import { ValidationError } from 'UI/ValidationError';
import { TextInputWrapper } from 'UI/TextInput/styles';

import { IContactsForm } from 'features/users/create-user/forms/Contacts';

import { SelectStyled } from './styles';

interface ISelectProps {
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<IContactsForm>>;
  onBlur: {
    (e: FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  label: string;
  value: { value: string; label: string } | undefined;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  name: string;
  id: string;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
  isMulti?: boolean;
}

export const Select = memo((props: ISelectProps) => {
  const {
    onChange,
    onBlur,
    label = '',
    value,
    required = false,
    name,
    id,
    error,
    touched,
    options,
    isMulti = false,
  } = props;

  return (
    <TextInputWrapper error={!!(touched && error)}>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <SelectStyled
        id={id}
        defaultValue={value}
        onChange={(selectedValue: any) => onChange(name, selectedValue)}
        name={name}
        onBlur={onBlur}
        options={options}
        classNamePrefix={'Select'}
        components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        isMulti={isMulti}
      />
      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
});
