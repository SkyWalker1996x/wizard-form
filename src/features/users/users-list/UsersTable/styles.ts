import styled from 'styled-components';

export const UsersListHeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr 1.5fr 1fr 0.5fr;
  align-items: center;
  background: ${({ theme }) => theme.colors.main};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  & > div {
    padding: 14px 3px;
  }
`;

export const UserRowWrapper = styled(UsersListHeaderWrapper)`
  margin-bottom: 0;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray300};

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const UserCellWrapper = styled.div`
  padding: 27px 9px;
  & .user-avatar {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border-radius: 50%;
    overflow: hidden;
  }

  & .action-icon {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
