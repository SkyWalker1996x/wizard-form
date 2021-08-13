import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { fetchItems, deleteItem, selectUsers } from '../usersSlice';

import { UsersTable } from './UsersTable';

import { UserListWrapper } from './styles';

export const UserListPage = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const onDeleteUser = useCallback((id: number) => {
    const isConfirm = window.confirm('Do you really want to delete this user?')
    isConfirm && dispatch(deleteItem(id));
  }, [dispatch]);

  const onEditUser = useCallback((id: number) => {
    console.log('edit user with id: ', id);
  }, []);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <UserListWrapper flexDirection="column" alignItems="center">
      <h1>List of users</h1>

      <UsersTable users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
    </UserListWrapper>
  );
};
