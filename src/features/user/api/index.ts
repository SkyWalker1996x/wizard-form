import db from 'app/indexedDB';
import { IUser } from 'types/users';

export const getUser = async (id: number | string) => {
  return db.table('users').get(Number(id));
};

export const postModifyUser = async (id: number | string, payload: Partial<IUser>) => {
  return db.table('users').where('id').equals(Number(id)).modify(payload);
};
