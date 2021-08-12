import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchItems, deleteItem, selectUsers } from '../usersSlice';

import { UsersTable } from './UsersTable';

import { UserListWrapper } from './styles';

export const UserListPage = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const onDeleteUser = useCallback((id: number) => {
    console.log('delete user with id: ', id);
    dispatch(deleteItem(id));
  }, []);

  const onEditUser = useCallback((id: number) => {
    console.log('edit user with id: ', id);
  }, []);

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <UserListWrapper flexDirection="column" alignItems="center">
      <h1>List of users</h1>

      <UsersTable users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
    </UserListWrapper>
  );
};
