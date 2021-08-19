import db from 'app/indexedDB';

import { ISendUserData, IUser } from 'types/users';

export const getUsers = async (page?: number) => {
  const pageValue = page ? page : 1;

  return db.table('users').offset(pageValue * 10 - 1).limit(5).toArray();
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
