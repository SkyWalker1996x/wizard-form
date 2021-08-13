import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { fetchUser, selectUser, selectUserStatus } from '../userSlice';

import { UserInfo } from './UserInfo';
import { FlexWrapper } from 'UI/FlexWrapper';
import { Loader } from 'UI/Loader';

interface UserPageMatchParams {
  id: string;
}

export const UserInfoPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const match = useRouteMatch<UserPageMatchParams>('/user/:id');
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

  return <div>{user && <UserInfo user={user} />}</div>;
};
