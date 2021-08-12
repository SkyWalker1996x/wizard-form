import { memo } from 'react';

import { TextInput } from 'UI/TextInput';
import { DatePicker } from 'UI/DatePicker';
import { RadioButtonGroup } from 'UI/RadioButtonGroup';
import { RadioButton } from 'UI/RadioButton';
import { FlexWrapper } from 'UI/FlexWrapper';
import GooglePlaceAutoComplete from 'UI/GoogleAutocomplete';

import { ProfileWrapper } from './styles';

import { FixTypeLater } from 'types';



export const ProfileForm = memo((props: FixTypeLater) => {
  const { formik } = props;

  return (
    <ProfileWrapper>
      <TextInput
        id="firstName"
        name="firstName"
        type="text"
        label="First name"
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        error={formik.errors.firstName}
        touched={formik.touched.firstName}
      />

      <TextInput
        id="email"
        name="email"
        type="text"
        label="Email"
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        error={formik.errors.email}
        touched={formik.touched.email}
      />

      <TextInput
        id="lastName"
        name="lastName"
        type="text"
        label="Last name"
        required={true}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        error={formik.errors.lastName}
        touched={formik.touched.lastName}
      />

      <GooglePlaceAutoComplete
        id="address"
        name="address"
        label="Address"
        required={true}
        onChange={formik.setFieldValue}
      />

      <DatePicker
        name="birthDate"
        onChange={formik.setFieldValue}
        value={formik.values.birthDate}
        label={'Birth date'}
        required={true}
        error={formik.errors.birthDate}
        touched={formik.touched.birthDate}
      />

      <RadioButtonGroup
        label="Gender"
        error={formik.errors.gender}
        touched={formik.touched.gender}
      >
        <FlexWrapper columnGap="43px">
          <RadioButton
            id="male"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
          />
          <RadioButton
            id="female"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
          />
        </FlexWrapper>
      </RadioButtonGroup>
    </ProfileWrapper>
  );
});
