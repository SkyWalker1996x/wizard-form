import { ValidationErrorWrapper } from './styles';
import { FormikErrors } from 'formik';

interface IValidationErrorProps {
  error: string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined;
}

export const ValidationError = ({ error }: IValidationErrorProps) => {
  return <ValidationErrorWrapper>{error}</ValidationErrorWrapper>;
};
