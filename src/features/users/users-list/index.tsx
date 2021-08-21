import { useCallback, useEffect, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';

import {
  selectUsers,
  selectUsersStatus,
  selectPage,
  selectPerPage,
  selectTotal,
  selectSearch,
  deleteItem,
  fetchItems,
  generateItems,
  increasePageNumber,
  decreasePageNumber,
  definePageNumber,
  editSearch,
} from '../usersSlice';

import { UsersTable } from './UsersTable';
import { Loader } from 'UI/Loader';
import { FlexWrapper } from 'UI/FlexWrapper';
import { TextInput } from 'UI/TextInput';

import { UserListWrapper, UserListTitleWrapper, UserSearchWrapper } from './styles';
import { GenerateUsersButton } from './GenerateUsersButton';
import { Pagination } from './Pagination';

export const UserListPage = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectUsersStatus);
  const page = useAppSelector(selectPage);
  const perPage = useAppSelector(selectPerPage);
  const total = useAppSelector(selectTotal);
  const search = useAppSelector(selectSearch);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const onDeleteUser = useCallback(
    (id: number) => {
      const isConfirm = window.confirm('Do you really want to delete this user?');
      isConfirm && dispatch(deleteItem({ id, page, perPage }));
    },
    [dispatch, page, perPage]
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

  const onNextPage = useCallback(() => {
    dispatch(increasePageNumber());
  }, [dispatch]);

  const onPrevPage = useCallback(() => {
    dispatch(decreasePageNumber());
  }, [dispatch]);

  const onDefinitePage = useCallback(
    (page: number) => {
      dispatch(definePageNumber(page));
    },
    [dispatch]
  );

  const onEditSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(editSearch(e.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchItems({ page, perPage }));
  }, [dispatch, page, perPage]);

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

      <UserSearchWrapper justifyContent={'space-between'} alignItems={"center"}>
        <TextInput label="Search" value={search} onChange={onEditSearch} />

        <GenerateUsersButton onGenerateUsers={onGenerateUsers} />
      </UserSearchWrapper>

      <UsersTable users={users} onEditUser={onEditUser} onDeleteUser={onDeleteUser} />

      <Pagination
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        onDefinitePage={onDefinitePage}
        page={page}
        perPage={perPage}
        total={total}
      />
    </UserListWrapper>
  );
};
