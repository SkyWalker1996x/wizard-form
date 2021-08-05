import { useFormik, FormikErrors } from 'formik';

import { TextInput } from 'UI/TextInput';
import { PasswordInput } from 'UI/PasswordInput';
import { Button } from 'UI/Button/Button';
import { ImageUpload } from './ImageUpload';

import { FormWrapper, ButtonWrapper } from 'features/users/create-user/forms/styles';
import { AccountWrapper, InputGroupWrapper } from './styles';

interface IAccountForm {
  userName: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

const initialValues: IAccountForm = {
  userName: '',
  password: '',
  confirmPassword: '',
  avatar: '',
};

const validate = (values: IAccountForm) => {
  let errors: FormikErrors<IAccountForm> = {};

  if (!values.userName) {
    errors.userName = 'Required';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password don't match";
  }

  return errors;
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
        />

        <InputGroupWrapper>
          <TextInput
            id="userName"
            name="userName"
            type="text"
            label="User name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            error={formik.errors.userName}
            touched={formik.touched.userName}
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
