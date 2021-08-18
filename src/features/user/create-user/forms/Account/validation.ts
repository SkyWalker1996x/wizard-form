import { FormikErrors } from 'formik';
import db from 'app/indexedDB';

import { IAccountForm } from 'types/users';

export const validate = async (values: IAccountForm) => {
  let errors: FormikErrors<IAccountForm> = {};

  if (!values.username) {
    errors.username = 'Required';
  } else {
    const users = await db.table('users').toArray();
    const isExistUser = users.find(item => item?.username === values.username);
    if (isExistUser && values?.id !== isExistUser?.id) {
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
