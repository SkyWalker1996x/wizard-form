import { memo } from 'react';

import { TextInput } from 'UI/TextInput';
import { PasswordInput } from 'UI/PasswordInput';

import { ImageUpload } from './ImageUpload';

import { AccountWrapper, InputGroupWrapper } from './styles';

import { FixTypeLater } from 'types';

export interface IAccountForm {
  username: string;
  password: string;
  confirmPassword: string;
  avatar: FixTypeLater;
}

export const AccountForm = memo((props: FixTypeLater) => {
  const { formik } = props;

  return (
    <AccountWrapper>
      <ImageUpload
        id="avatar"
        name="avatar"
        onChange={formik.setFieldValue}
        error={formik.errors.avatar}
        value={formik.values.avatar}
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
  );
});
