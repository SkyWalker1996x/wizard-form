import { useHistory } from 'react-router-dom';
import { FormikProvider, useFormik } from 'formik';
import { useAppDispatch } from 'app/hooks';

import { modifyUser } from '../userSlice';
import { validate } from 'features/user/create-user/forms/validation';
import { extractModifiedProperties } from 'utils/data';

import { AccountForm } from 'features/user/create-user/forms/Account';
import { ProfileForm } from 'features/user/create-user/forms/Profile';
import { ContactsForm } from 'features/user/create-user/forms/Contacts';
import { CapabilitiesForm } from 'features/user/create-user/forms/Capabilities';
import { FormNavigation } from 'features/user/create-user/forms/FormNavigation';
import { Button } from 'UI/Button/Button';

import { ButtonWrapper, FormWrapper } from 'features/user/create-user/forms/styles';

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
  console.log('props', props);
  const { activeStep, initialValues } = props;
  const dispatch = useAppDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep - 1],
    onSubmit: (values: IUser) => {
      const modifiedProperties = extractModifiedProperties(initialValues, values);

      if (modifiedProperties) {
        dispatch(modifyUser({ id: values.id, payload: modifiedProperties }));
        history.push(`/user/${values.id}`);
      } else {
        alert("You've changed nothing");
      }
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
