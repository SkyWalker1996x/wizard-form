import { useFormik, FormikProvider } from 'formik';

import { validate } from 'features/user/create-user/forms/validation';

import { AccountForm } from 'features/user/create-user/forms/Account';
import { ProfileForm } from 'features/user/create-user/forms/Profile';
import { ContactsForm } from 'features/user/create-user/forms/Contacts';
import { CapabilitiesForm } from 'features/user/create-user/forms/Capabilities';
import { FormNavigation } from 'features/user/create-user/forms/FormNavigation';
import { Button } from 'UI/Button/Button';

import {
  ButtonWrapper,
  FormWrapper,
} from 'features/user/create-user/forms/styles';

import { IUser } from 'types/users';

const renderStepContent = (step: number) => {
  switch (step) {
    case 1:
      return <AccountForm />;
    case 2:
      return <ProfileForm />;
    case 3:
      return <ContactsForm />;
    case 4:
      return <CapabilitiesForm />;
    default:
      return <div>Not Found</div>;
  }
};

interface IEditUserForm {
  initialValues: IUser;
  activeStep: number;
  handleChangeActiveStep: (value: null | number) => void;
}

export const EditUserForm = (props: IEditUserForm) => {
  const { activeStep, initialValues } = props;

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep - 1],
    onSubmit: (values: IUser) => {
      console.log('values', values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormNavigation activeStep={activeStep} />

        {renderStepContent(activeStep)}

        <ButtonWrapper>
          <Button type="submit" text={'Save'} background={'success'} />
        </ButtonWrapper>
      </FormWrapper>
    </FormikProvider>
  );
};
