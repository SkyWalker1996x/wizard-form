import { Button } from 'UI/Button/Button';
import { ButtonWrapper } from 'features/user/create-user/forms/styles';

interface IGenerateUsersProps {
  onGenerateUsers: () => void;
}

export const GenerateUsersButton = (props: IGenerateUsersProps) => {
  const { onGenerateUsers } = props;

  return (
    <ButtonWrapper>
      <Button text={'Generate'} onClick={onGenerateUsers} />
    </ButtonWrapper>
  );
};
