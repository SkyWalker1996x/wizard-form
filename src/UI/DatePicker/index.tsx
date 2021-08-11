import { FormikErrors, FormikTouched } from 'formik';
import { ValidationError } from '../ValidationError';

import { ReactComponent as CalendarIcon } from 'assets/calendar-mark.svg';
import { ReactComponent as ArrowRight } from 'assets/arrow-right-mark.svg';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left-mark.svg';

import { TextInputWrapper } from 'UI/TextInput/styles';
import { DatePickerStyled } from './styles';

interface IDatePickerProps {
  onChange: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>;
  value: Date | null | undefined;
  name: string;
  format?: string;
  label: string;
  required: boolean;
  touched: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined;
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
}

export const DatePicker = (props: IDatePickerProps) => {
  const {
    onChange,
    value,
    name,
    format = 'dd/MM/y',
    label = '',
    required = false,
    touched,
    error,
  } = props;

  return (
    <TextInputWrapper>
      <label>
        <span>{label}</span>
        {required && <span>*</span>}
      </label>
      <DatePickerStyled
        name={name}
        onChange={(val: Date) => onChange(name, val)}
        value={value}
        format={format}
        dayPlaceholder="DD"
        monthPlaceholder="MM"
        yearPlaceholder="YY"
        next2Label={null}
        clearIcon={null}
        prev2Label={null}
        calendarIcon={<CalendarIcon />}
        nextLabel={<ArrowRight />}
        prevLabel={<ArrowLeft />}
        error={!!(touched && error)}
      />

      {touched && error && <ValidationError error={error} />}
    </TextInputWrapper>
  );
};
