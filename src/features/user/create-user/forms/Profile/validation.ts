import { FormikErrors } from 'formik';
import { IProfileForm } from 'types/users';

import db from 'app/indexedDB';
import { EIGHTEEN_YEARS_IN_MS } from 'app/app-constants';

const emailRegExp = /\S+@\S+\.\S+/;

const isAdult = (date: number) => {
  const dateFormat = new Date(date);

  const birthDateInMs = dateFormat.getTime();
  const todayInMs = new Date().getTime();

  return todayInMs - birthDateInMs > EIGHTEEN_YEARS_IN_MS;
};

export const validate = async (values: IProfileForm) => {
  let errors: FormikErrors<IProfileForm> = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.birthDate) {
    errors.birthDate = 'Required';
  } else if (!isAdult(values.birthDate)) {
    errors.birthDate = 'This form for adult';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!emailRegExp.test(values.email)) {
    errors.email = 'Incorrect Email';
  } else {
    const users = await db.table('users').toArray();
    const isExistUser = users.find(item => item?.email === values.email);
    if (isExistUser && values?.id !== isExistUser?.id) {
      errors.email = 'User with this email is exist';
    }
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  return errors;
};
