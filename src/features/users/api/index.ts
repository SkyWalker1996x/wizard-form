import db from 'app/indexedDB';

import { ISendUserData, IUser } from 'types/users';

export const getUsers = async () => {
  return db.table('users').toArray();
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