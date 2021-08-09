import { FormikErrors } from 'formik';
import db from 'app/indexedDB';
import { DEFAULT_MAX_FILE_SIZE_IN_BYTES } from 'app/app-constants';

import { IAccountForm } from './index';

export const validate = async (values: IAccountForm) => {
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

  if (values?.avatar?.size > DEFAULT_MAX_FILE_SIZE_IN_BYTES) {
    errors.avatar = 'File size should be less 1 MB';
  }

  return errors;
};
