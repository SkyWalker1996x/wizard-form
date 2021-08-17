import { useCallback, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { fetchUser, selectUser, selectUserStatus } from '../userSlice';

import { EditUserForm } from '../edit-user';
import { UserInfo } from './UserInfo';
import { FlexWrapper } from 'UI/FlexWrapper';
import { Loader } from 'UI/Loader';
import { Text } from 'UI/Text';

import { HeaderUserPageWrapper } from './UserInfo/styles';

import arrowLeftMark from 'assets/arrow-left-mark.svg';

interface UserPageMatchParams {
  id: string;
}

export const UserInfoPage = () => {
  const [activeStep, setActiveStep] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const match = useRouteMatch<UserPageMatchParams>('/user/:id');
  const id = match?.params.id;

  const handleChangeActiveStep = useCallback((value: null | number) => {
    setActiveStep(value);
  }, []);

  useEffect(() => {
    id && dispatch(fetchUser(id));
  }, [id, dispatch]);

  if (status === 'loading') {
    return (
      <FlexWrapper justifyContent="center" alignItems="center">
        <Loader />
      </FlexWrapper>
    );
  }

  return (
    <FlexWrapper flexDirection="column" alignItems="center">
      <HeaderUserPageWrapper>
        <Link to="/">
          <FlexWrapper alignItems="center" columnGap="10px">
            <img src={arrowLeftMark} alt="to user list" />

            <Text
              text={'User list'}
              textAlign="center"
              fontWeight="700"
              fontSize="24px"
              color="gray100"
            />
          </FlexWrapper>
        </Link>

        <Text
          // @ts-ignore
          text={activeStep ? 'Editing' : user?.username}
          textAlign="center"
          fontWeight="700"
          fontSize="35px"
          color="gray300"
        />
      </HeaderUserPageWrapper>

      {!activeStep && user && (
        <UserInfo user={user} handleChangeActiveStep={handleChangeActiveStep} />
      )}
      {activeStep && user && (
        <EditUserForm
          activeStep={activeStep}
          initialValues={user}
          handleChangeActiveStep={handleChangeActiveStep}
        />
      )}
    </FlexWrapper>
  );
};
