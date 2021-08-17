import { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from 'app/hooks';
import { FORM_STAGES } from 'app/app-constants';
import { addItem } from 'features/users//usersSlice';
import { validate } from './forms/validation';

import { AccountForm } from './forms/Account';
import { ProfileForm } from './forms/Profile';
import { ContactsForm } from './forms/Contacts';
import { CapabilitiesForm } from './forms/Capabilities';
import { FormNavigation } from './forms/FormNavigation';
import { RestorePanel } from './forms/RestorePanel';
import { Button } from 'UI/Button/Button';
import { Text } from 'UI/Text';

import { ButtonWrapper, FormWrapper, PageWrapper } from './forms/styles';
import { HeaderUserPageWrapper } from 'features/user/user-info/UserInfo/styles';

import { IFormikProps } from 'types';
import { ICreateUserForm, IUser } from 'types/users';

interface IPersistedDataState {
  data: IUser | undefined;
  status: boolean;
  stage: number | undefined;
}

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
  const [isFormSubmit, setFormSubmit] = useState(false);
  const [persistedData, setPersistedData] = useState<IPersistedDataState>({
    data: undefined,
    status: false,
    stage: undefined,
  });
  const [activeStep, setActiveStep] = useState(1);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues,
    validate: validate[activeStep - 1],
    onSubmit: (values: ICreateUserForm) => {
      if (activeStep === FORM_STAGES.length) {
        setFormSubmit(true);
        dispatch(addItem({ ...values, lastUpdate: new Date() }));
        history.push('/');
      } else {
        handleIncreaseStep();
      }
    },
  });

  const handleIncreaseStep = useCallback(() => {
    setActiveStep(prev => prev + 1);
    formik.setTouched({});
    formik.setSubmitting(false);
  }, []);

  const handleDecreaseStep = useCallback(() => {
    setActiveStep(prev => prev - 1);
  }, []);

  const saveFormDataToLocalStorage = useCallback(() => {
    if (JSON.stringify(formik.values) !== JSON.stringify(initialValues)) {
      localStorage.setItem(
        'userFormData',
        JSON.stringify({ data: formik.values, stage: activeStep })
      );
    }
  }, [formik.values, activeStep]);

  const removeFormDataFromLocalStorage = useCallback(() => {
    localStorage.removeItem('userFormData');
  }, []);

  const handleLoadFormData = useCallback(() => {
    if (persistedData.data !== undefined && persistedData.stage !== undefined) {
      setActiveStep(persistedData.stage);
      formik.setValues(persistedData.data);

      setPersistedData(prev => {
        return {
          ...prev,
          status: false,
        };
      });
    }
  }, [persistedData]);

  const handleRemoveFormData = useCallback(() => {
    removeFormDataFromLocalStorage();
    setPersistedData(prev => {
      return {
        ...prev,
        status: false,
      };
    });
  }, []);

  useEffect(() => {
    const persistedData = localStorage.getItem('userFormData');

    if (persistedData) {
      const parsedPersistedData: { data: IUser; stage: number } =
        JSON.parse(persistedData);

      setPersistedData({ ...parsedPersistedData, status: true });
    }
  }, []);

  useEffect(() => {
    const historyListener = history.listen(() => {
      if (!isFormSubmit) {
        saveFormDataToLocalStorage();
      }
    });

    if (formik.values !== initialValues) {
      window.addEventListener('beforeunload', saveFormDataToLocalStorage);
    }

    return () => {
      window.removeEventListener('beforeunload', saveFormDataToLocalStorage);
      historyListener();
    };
  }, [formik.values, history, saveFormDataToLocalStorage, isFormSubmit]);

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

      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormNavigation activeStep={activeStep} />
        {persistedData.status && (
          <RestorePanel
            handleLoadFormData={handleLoadFormData}
            handleRemoveFormData={handleRemoveFormData}
          />
        )}

        {renderStepContent(activeStep, formik)}

        <ButtonWrapper>
          {activeStep !== 1 && (
            <Button
              type="button"
              text="Back"
              background={'blue200'}
              onClick={handleDecreaseStep}
            />
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
