import { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Route, Switch } from 'react-router-dom';

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
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const match = useRouteMatch<UserPageMatchParams>('/user/:id');
  const path = match?.path;
  const url = match?.url;
  const isExact = match?.isExact;
  const id = match?.params.id;

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
        {!isExact ? (
          <Link to={`/user/${id}`}>
            <FlexWrapper alignItems="center" columnGap="10px">
              <img src={arrowLeftMark} alt="to user list" />

              <Text
                text={'User Profile'}
                textAlign="center"
                fontWeight="700"
                fontSize="24px"
                color="gray100"
              />
            </FlexWrapper>
          </Link>
        ) : (
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
        )}

        <Text
          // @ts-ignore
          text={!isExact ? 'Editing' : user?.username}
          textAlign="center"
          fontWeight="700"
          fontSize="35px"
          color="gray300"
        />
      </HeaderUserPageWrapper>

      <Switch>
        <Route exact path={path}>
          {user && url && <UserInfo user={user} url={url} />}
        </Route>

        <Route exact path={`${path}/edit-account`}>
          {user && <EditUserForm activeStep={1} initialValues={user} />}
        </Route>

        <Route exact path={`${path}/edit-profile`}>
          {user && <EditUserForm activeStep={2} initialValues={user} />}
        </Route>

        <Route exact path={`${path}/edit-contacts`}>
          {user && <EditUserForm activeStep={3} initialValues={user} />}
        </Route>

        <Route exact path={`${path}/edit-capabilities`}>
          {user && <EditUserForm activeStep={4} initialValues={user} />}
        </Route>
      </Switch>
    </FlexWrapper>
  );
};
