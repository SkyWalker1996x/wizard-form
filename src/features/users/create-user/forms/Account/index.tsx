import { useFormik } from 'formik';

import { TextInput } from 'UI/TextInput';
import { PasswordInput } from 'UI/PasswordInput';
import { Button } from 'UI/Button/Button';
import { ImageUpload } from './ImageUpload';

import { FormWrapper, ButtonWrapper } from 'features/users/create-user/forms/styles';
import { AccountWrapper, InputGroupWrapper } from './styles';

import { validate } from './validation';
import { FixTypeLater } from 'types';

export interface IAccountForm {
  username: string;
  password: string;
  confirmPassword: string;
  avatar: FixTypeLater;
}

const initialValues: IAccountForm = {
  username: '',
  password: '',
  confirmPassword: '',
  avatar: '',
};

export const AccountForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: values => {
      console.log('values submit', values);
    },
  });

  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <AccountWrapper>
        <ImageUpload
          id="avatar"
          name="avatar"
          onChange={formik.setFieldValue}
          avatar={formik.values.avatar}
          error={formik.errors.avatar}
          touched={formik.touched.avatar}
        />

        <InputGroupWrapper>
          <TextInput
            id="username"
            name="username"
            type="text"
            label="User name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.errors.username}
            touched={formik.touched.username}
          />

          <PasswordInput
            id="password"
            name="password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
          />

          <PasswordInput
            id="confirmPassword"
            name="confirmPassword"
            label="Repeat Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={formik.errors.confirmPassword}
            touched={formik.touched.confirmPassword}
          />
        </InputGroupWrapper>
      </AccountWrapper>

      <ButtonWrapper>
        <Button type="submit" text="Forward" />
      </ButtonWrapper>
    </FormWrapper>
  );
};
