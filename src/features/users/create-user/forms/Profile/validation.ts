import { FormikErrors } from 'formik';

import db from 'app/indexedDB';
import { eighteenYearsInMs } from 'app/app-constants';

import { FixTypeLater } from 'types';

const isAdult = (date: Date) => {
  const birthDateInMs = date.getTime();
  const todayInMs = new Date().getTime();

  return todayInMs - birthDateInMs > eighteenYearsInMs;
};

export const validate = async (values: FixTypeLater) => {
  let errors: FormikErrors<FixTypeLater> = {};

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
  } else {
    const users = await db.table('users').toArray();
    const isExistEmail = users.find(item => item?.email === values.email);
    if (isExistEmail) {
      errors.email = 'User with this email is exist';
    }
  }

  if (!values.address) {
    errors.address = 'Required';
  }

  if (!values.gender) {
    errors.gender = 'Required';
  }

  return errors;
};
