import { useState } from 'react';
import { useFormik } from 'formik';

import { useAppDispatch } from 'app/hooks';
import { FORM_STAGES } from 'app/app-constants';
import { addItem } from 'features/users//usersSlice';
import { validate } from './forms/validation';

import { AccountForm } from './forms/Account';
import { ProfileForm } from './forms/Profile';
import { ContactsForm } from './forms/Contacts';
import { CapabilitiesForm } from './forms/Capabilities';
import { FormNavigation } from './forms/FormNavigation';
import { Button } from 'UI/Button/Button';

import { ButtonWrapper, FormWrapper, PageWrapper } from './forms/styles';

import { IFormikProps } from 'types';
import { ICreateUserForm } from 'types/users';

const initialValues: ICreateUserForm = {
  username: '',
  password: '',
  confirmPassword: '',
  avatar: undefined,
  firstName: '',
  lastName: '',
  birthDate: undefined,
  email: '',
  address: '',
  gender: '',
  company: '',
  githubLink: '',
  facebookLink: '',
  fax: '',
  mainLang: undefined,
  phones: [''],
  skills: [],
  addInformation: '',
  hobbies: [],
};

const renderStepContent = (step: number, formik: IFormikProps) => {
  switch (step) {
    case 1:
      return <AccountForm formik={formik} />;
    case 2:
      return <ProfileForm formik={formik} />;
    case 3:
      return <ContactsForm formik={formik} />;
    case 4:
      return <CapabilitiesForm formik={formik} />;
    default:
      return <div>Not Found</div>;
  }
};

export const CreateUserForm = () => {
  const [activeStep, setActiveStep] = useState(1);
  const dispatch = useAppDispatch();

  const handleIncreaseStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const handleDecreaseStep = () => {
    setActiveStep(prev => prev - 1);
  };

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep - 1],
    onSubmit: (values: ICreateUserForm) => {
      if (activeStep === FORM_STAGES.length) {
        dispatch(addItem({ ...values, lastUpdate: new Date() }));
      } else {
        handleIncreaseStep();
      }
    },
  });

  return (
    <PageWrapper>
      <h2>Adding user</h2>

      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormNavigation activeStep={activeStep} />

        {renderStepContent(activeStep, formik)}

        <ButtonWrapper>
          {activeStep !== 1 && (
            <Button text="Back" background={'blue200'} onClick={handleDecreaseStep} />
          )}
          <Button
            type="submit"
            text={activeStep === FORM_STAGES.length ? 'Finish' : 'Forward'}
            background={activeStep === FORM_STAGES.length ? 'success' : 'main'}
          />
        </ButtonWrapper>
      </FormWrapper>
    </PageWrapper>
  );
};
