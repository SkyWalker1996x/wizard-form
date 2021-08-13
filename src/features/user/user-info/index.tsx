import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';

import { fetchUser } from '../userSlice';

interface UserPageMatchParams {
  id: string;
}

export const UserInfoPage = () => {
  const dispatch = useAppDispatch();
  const match = useRouteMatch<UserPageMatchParams>('/user/:id');
  const id = match?.params.id;

  useEffect(() => {
    id && dispatch(fetchUser(id));
  }, [id]);

  return <h1>User Info</h1>;
};
