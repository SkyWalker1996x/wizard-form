import { FocusEvent, ChangeEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik/dist/types';
import { ICreateUserForm } from 'features/users/create-user';

export type FixTypeLater = any;

export interface IFormikProps {
  handleBlur: {
    (e: FocusEvent<any>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleChange: {
    (e: ChangeEvent<any>): void;
    <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  values: ICreateUserForm;
  errors: FormikErrors<ICreateUserForm>;
  touched: FormikTouched<ICreateUserForm>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<ICreateUserForm>> | Promise<void>;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
}

export interface IStepFormProps {
  formik: IFormikProps;
}
