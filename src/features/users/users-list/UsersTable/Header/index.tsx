import { UsersListHeaderWrapper } from '../styles';

interface IUsersListHeaderProps {
  items: Array<{ id: number; title: string; value: string }>;
}

export const UsersListHeader = (props: IUsersListHeaderProps) => {
  const { items } = props;

  return (
    <UsersListHeaderWrapper>
      {items.map(item => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </UsersListHeaderWrapper>
  );
};
