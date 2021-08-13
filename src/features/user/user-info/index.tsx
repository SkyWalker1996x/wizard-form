import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { fetchUser, selectUser } from '../userSlice';

import { UserInfo } from './UserInfo';

interface UserPageMatchParams {
  id: string;
}

export const UserInfoPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const match = useRouteMatch<UserPageMatchParams>('/user/:id');
  const id = match?.params.id;

  useEffect(() => {
    id && dispatch(fetchUser(id));
  }, [id, dispatch]);

  return <div>{user && <UserInfo user={user} />}</div>;
};
