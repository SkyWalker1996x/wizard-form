import { useFormik, FormikErrors } from 'formik';
import db from 'app/indexedDB';

import { TextInput } from 'UI/TextInput';
import { PasswordInput } from 'UI/PasswordInput';
import { Button } from 'UI/Button/Button';
import { ImageUpload } from './ImageUpload';

import { FormWrapper, ButtonWrapper } from 'features/users/create-user/forms/styles';
import { AccountWrapper, InputGroupWrapper } from './styles';

interface IAccountForm {
  username: string;
  password: string;
  confirmPassword: string;
  avatar: string;
}

const initialValues: IAccountForm = {
  username: '',
  password: '',
  confirmPassword: '',
  avatar: '',
};

const validate = async (values: IAccountForm) => {
  let errors: FormikErrors<IAccountForm> = {};

  if (!values.username) {
    errors.username = 'Required';
  } else {
    const users = await db.table('users').toArray();
    const isExistUser = users.find(item => item?.username === values.username);
    if (isExistUser) {
      errors.username = 'User with this name is exist';
    }
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
