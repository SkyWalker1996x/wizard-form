import { useFormik } from 'formik';

import { ButtonWrapper, FormWrapper } from '../styles';
import { ProfileWrapper } from './styles';
import { Button } from 'UI/Button/Button';
import { TextInput } from 'UI/TextInput';
import { DatePicker } from 'UI/DatePicker';

import { FixTypeLater } from 'types';

const initialValues = {
  firstName: '',
  lastName: '',
  birthDate: '',
  email: '',
  address: '',
  gender: '',
};

export const ProfileForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values: FixTypeLater) => {
      console.log('values submit', values);
    },
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
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

        <TextInput
          id="address"
          name="address"
          type="text"
          label="Address"
          required={true}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          error={formik.errors.address}
          touched={formik.touched.address}
        />

        <DatePicker
          name="birthDate"
          onChange={formik.setFieldValue}
          value={formik.values.birthDate}
          label={'Birth date'}
          required={true}
        />
      </ProfileWrapper>

      <ButtonWrapper>
        <Button type="submit" text="Forward" />
      </ButtonWrapper>
    </FormWrapper>
  );
};
