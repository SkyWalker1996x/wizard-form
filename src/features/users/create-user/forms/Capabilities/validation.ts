import { ICapabilitiesForm } from './index';
import { FormikErrors } from 'formik';

export const validate = async (values: ICapabilitiesForm) => {
  let errors: FormikErrors<ICapabilitiesForm> = {};

  if (!values.skills) {
    errors.skills = 'Required';
  } else if (values.skills.length < 3) {
    errors.skills = 'You should select 3 items at least';
  }

  return errors;
};
