import db from 'app/indexedDB';

import { ISendUserData, IUser } from 'types/users';

export const getUsers = async ({
  page,
  perPage,
  search,
}: {
  page?: number;
  perPage?: number;
  search?: string;
}) => {
  const pageValue = page ? page : 1;
  const perPageValue = perPage ? perPage : 10;
  const searchValue = search ? search : '';
  const offset = (pageValue - 1) * perPageValue - 1;

  return db
    .table('users')
    .where('lastName')
    .startsWithIgnoreCase(searchValue)
    .or('firstName')
    .startsWithIgnoreCase(searchValue)
    .offset(offset)
    .limit(perPageValue)
    .toArray();
};

export const getUsersTotal = async () => {
  return db.table('users').count();
};

export const postAddUser = async (payload: ISendUserData) => {
  return db.table('users').add(payload);
};

export const postDeleteUser = async (id: number) => {
  return db.table('users').where('id').equals(id).delete();
};

export const clearUsers = async () => {
  return db.table('users').clear();
};

export const postInsertUsers = async (users: Array<Partial<IUser>>) => {
  return db.table('users').bulkAdd(users);
};
