import { useFormik, FormikProvider } from 'formik';

import { validate } from 'features/user/create-user/forms/validation';

import { AccountForm } from 'features/user/create-user/forms/Account';
import { ProfileForm } from 'features/user/create-user/forms/Profile';
import { ContactsForm } from 'features/user/create-user/forms/Contacts';
import { CapabilitiesForm } from 'features/user/create-user/forms/Capabilities';
import { FormNavigation } from 'features/user/create-user/forms/FormNavigation';
import { Button } from 'UI/Button/Button';
import { Text } from 'UI/Text';

import {
  ButtonWrapper,
  FormWrapper,
  PageWrapper,
} from 'features/user/create-user/forms/styles';
import { HeaderUserPageWrapper } from 'features/user/user-info/UserInfo/styles';

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
    <PageWrapper>
      <HeaderUserPageWrapper>
        <div />

        <Text
          text={'Adding user'}
          textAlign="center"
          fontWeight="700"
          fontSize="35px"
          color="gray300"
        />
      </HeaderUserPageWrapper>

      <FormikProvider value={formik}>
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormNavigation activeStep={activeStep} />

          {renderStepContent(activeStep)}

          <ButtonWrapper>
            <Button type="submit" text={'Save'} background={'success'} />
          </ButtonWrapper>
        </FormWrapper>
      </FormikProvider>
    </PageWrapper>
  );
};
