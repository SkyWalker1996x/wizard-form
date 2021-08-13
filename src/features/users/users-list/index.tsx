import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import { deleteItem, fetchItems, selectUsers } from '../usersSlice';

import { UsersTable } from './UsersTable';

import { UserListWrapper, UserListTitleWrapper } from './styles';

export const UserListPage = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onDeleteUser = useCallback(
    (id: number) => {
      const isConfirm = window.confirm('Do you really want to delete this user?');
      isConfirm && dispatch(deleteItem(id));
    },
    [dispatch]
  );

  const onEditUser = useCallback((id: number) => {
    console.log('edit user with id: ', id);
    history.push(`/user/${id}`);
  }, []);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <UserListWrapper flexDirection="column" alignItems="center">
      <UserListTitleWrapper
        text={'List of users'}
        textAlign="center"
        fontWeight="700"
        fontSize="35px"
        color="gray300"
      />

      <UsersTable users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />
    </UserListWrapper>
  );
};
