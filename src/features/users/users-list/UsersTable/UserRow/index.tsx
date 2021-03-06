import { FlexWrapper } from 'UI/FlexWrapper';

import { transformToRelativeTime } from 'utils/time';

import { IUser } from 'types/users';

import personMark from 'assets/person-mark.svg';
import deleteMark from 'assets/delete-mark.svg';
import editMark from 'assets/edit-mark.svg';
import { UserRowWrapper, UserCellWrapper } from '../styles';

interface IUserRowProps {
  user: IUser;
  onDeleteUser: (id: number) => void;
  onEditUser: (id: number) => void;
}

export const UserRow = (props: IUserRowProps) => {
  const {
    user: { avatar, firstName, lastName, company, email, lastUpdate, id },
    onDeleteUser,
    onEditUser,
  } = props;

  return (
    <UserRowWrapper>
      <UserCellWrapper>
        <img className="user-avatar" src={avatar || personMark} alt="avatar" />
      </UserCellWrapper>
      <UserCellWrapper>
        <FlexWrapper flexDirection="column">
          <span>
            {firstName} {lastName}
          </span>
          <span style={{ fontSize: '9px' }}>username</span>
        </FlexWrapper>
      </UserCellWrapper>
      <UserCellWrapper>{company}</UserCellWrapper>
      <UserCellWrapper>{email}</UserCellWrapper>
      <UserCellWrapper>
        {lastUpdate && transformToRelativeTime(lastUpdate)}
      </UserCellWrapper>
      <UserCellWrapper>
        <FlexWrapper columnGap="22px">
          <span onClick={() => onEditUser(id)}>
            <img className="action-icon" src={editMark} alt="edit" />
          </span>
          <span onClick={() => onDeleteUser(id)}>
            <img className="action-icon" src={deleteMark} alt="delete" />
          </span>
        </FlexWrapper>
      </UserCellWrapper>
    </UserRowWrapper>
  );
};
