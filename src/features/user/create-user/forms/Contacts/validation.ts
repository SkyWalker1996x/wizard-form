import { IContactsForm } from 'types/users';
import { FormikErrors } from 'formik';

let phoneRegExp = /^\+\d{2} \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export const validate = async (values: IContactsForm) => {
  let errors: FormikErrors<IContactsForm> = {};

  if (!values.company) {
    errors.company = 'Required';
  }

  if (!values.mainLang) {
    errors.mainLang = 'Required';
  }

  if (values.phones.length !== 0) {
    const phonesErrors: Array<string> = [];

    values.phones.forEach((item, index) => {
      if (item.trim() !== '' && !phoneRegExp.test(item)) {
        phonesErrors[index] = 'Incorrect number';
      }
    });

    if (phonesErrors.length > 0) {
      errors.phones = phonesErrors;
    }
  }

  return errors;
};
