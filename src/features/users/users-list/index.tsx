import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import {
  deleteItem,
  fetchItems,
  selectUsers,
  selectUsersStatus,
  generateItems,
} from '../usersSlice';

import { UsersTable } from './UsersTable';
import { Loader } from 'UI/Loader';
import { FlexWrapper } from 'UI/FlexWrapper';

import { UserListWrapper, UserListTitleWrapper } from './styles';
import { GenerateUsersButton } from './GenerateUsersButton';

export const UserListPage = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectUsersStatus);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onDeleteUser = useCallback(
    (id: number) => {
      const isConfirm = window.confirm('Do you really want to delete this user?');
      isConfirm && dispatch(deleteItem(id));
    },
    [dispatch]
  );

  const onEditUser = useCallback(
    (id: number) => {
      history.push(`/user/${id}`);
    },
    [history]
  );

  const onGenerateUsers = useCallback(() => {
    dispatch(generateItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <FlexWrapper justifyContent="center" alignItems="center">
        <Loader />
      </FlexWrapper>
    );
  }

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

      <GenerateUsersButton onGenerateUsers={onGenerateUsers} />
    </UserListWrapper>
  );
};
