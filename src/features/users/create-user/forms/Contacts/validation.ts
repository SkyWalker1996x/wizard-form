import { IContactsForm } from 'types/users';
import { FormikErrors } from 'formik';

export const validate = async (values: IContactsForm) => {
  let errors: FormikErrors<IContactsForm> = {};

  if (!values.company) {
    errors.company = 'Required';
  }

  if (!values.mainLang) {
    errors.mainLang = 'Required';
  }

  return errors;
};
