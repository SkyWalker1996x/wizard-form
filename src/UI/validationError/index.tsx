import { ValidationErrorWrapper } from './styles';

interface IValidationErrorProps {
  error: string;
}

export const ValidationError = ({ error }: IValidationErrorProps) => {
  return <ValidationErrorWrapper>{error}</ValidationErrorWrapper>;
};
