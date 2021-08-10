import { useState } from 'react';
import { useFormik } from 'formik';

import { useAppDispatch } from 'app/hooks';
import { FORM_STAGES } from 'app/app-constants';
import { addItem } from '../usersSlice';
import { validate } from './forms/validation';

import { AccountForm, IAccountForm } from './forms/Account';
import { ProfileForm, IProfileForm } from './forms/Profile';
import { ContactsForm, IContactsForm } from './forms/Contacts';
import { CapabilitiesForm, ICapabilitiesForm } from './forms/Capabilities';
import { FormNavigation } from './forms/FormNavigation';
import { Button } from 'UI/Button/Button';

import { ButtonWrapper, FormWrapper, PageWrapper } from './forms/styles';

import { FixTypeLater } from 'types';

export interface ICreateUserForm
  extends IAccountForm,
    IProfileForm,
    IContactsForm,
    ICapabilitiesForm {}

const initialValues: ICreateUserForm = {
  username: '',
  password: '',
  confirmPassword: '',
  avatar: '',
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

const renderStepContent = (step: number, formik: FixTypeLater) => {
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
  const [activeStep, setActiveStep] = useState(4);
  const dispatch = useAppDispatch();

  const handleIncreaseStep = () => {
    setActiveStep(prev => prev + 1);
  };

  const handleDecreaseStep = () => {
    setActiveStep(prev => prev - 1);
  };

  const formik = useFormik({
    initialValues,
    // @ts-ignore
    validate: validate[activeStep - 1],
    onSubmit: (values: ICreateUserForm) => {
      if (activeStep === FORM_STAGES.length) {
        // @ts-ignore
        dispatch(addItem(values));
        console.log('values submit', values);
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
