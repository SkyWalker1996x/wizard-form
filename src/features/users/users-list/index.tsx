import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks';
import { fetchItems } from '../usersSlice';

import { UserListWrapper } from './styles';

export const UserList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <UserListWrapper flexDirection="column" alignItems="center">
      <h1>List of users</h1>

      <div>Table</div>
    </UserListWrapper>
  );
};
