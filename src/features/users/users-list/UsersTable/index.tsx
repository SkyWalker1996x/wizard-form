import { USERS_LIST_HEADERS } from 'app/app-constants';

import { UsersListHeader } from './Header';
import { UserRow } from './UserRow';

import { FixTypeLater } from 'types';

interface IUserTableProps {
  users: FixTypeLater;
  onDeleteUser: (id: number) => void;
  onEditUser: (id: number) => void;
}

export const UsersTable = (props: IUserTableProps) => {
  const { users, onDeleteUser, onEditUser } = props;
  return (
    <>
      <UsersListHeader items={USERS_LIST_HEADERS} />

      {users.map((user: FixTypeLater) => {
        return (
          <UserRow
            key={user.id}
            user={user}
            onEditUser={onEditUser}
            onDeleteUser={onDeleteUser}
          />
        );
      })}
    </>
  );
};
