import { DatePickerStyled } from './styles';

import { ReactComponent as CalendarIcon } from 'assets/calendar-mark.svg';
import { ReactComponent as ArrowRight } from 'assets/arrow-right-mark.svg';
import { ReactComponent as ArrowLeft } from 'assets/arrow-left-mark.svg';

import { FixTypeLater } from 'types';
import { TextInputWrapper } from '../TextInput/styles';

export const DatePicker = (props: FixTypeLater) => {
  const {
    onChange,
    value,
    name,
    format = 'dd/MM/y',
    label = '',
    required = false,
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
      />
    </TextInputWrapper>
  );
};
