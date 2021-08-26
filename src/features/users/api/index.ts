import db from 'app/indexedDB';

import { ISendUserData, IUser } from 'types/users';

const calculateLimit = ({
  total,
  offset,
  perPage,
}: {
  total: number;
  offset: number;
  perPage: number;
}) => {
  const difference = total - offset;
  return difference > perPage ? perPage : difference;
};

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
  const offset = (pageValue - 1) * perPageValue;
  let users;
  let total;

  total =
    searchValue === ''
      ? await db.table('users').count()
      : await db
          .table('users')
          .where('lastName')
          .startsWithIgnoreCase(searchValue)
          .or('firstName')
          .startsWithIgnoreCase(searchValue)
          .count();

  const limit = calculateLimit({ total, offset, perPage: perPageValue });

  users =
    searchValue === ''
      ? await db.table('users').offset(offset).limit(limit).toArray()
      : await db
          .table('users')
          .where('lastName')
          .startsWithIgnoreCase(searchValue)
          .or('firstName')
          .startsWithIgnoreCase(searchValue)
          .offset(offset)
          .limit(limit)
          .toArray();

  return { users, total };
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
