import { Button } from 'UI/Button/Button';
import { ButtonWrapper } from 'features/user/create-user/forms/styles';

interface IGenerateUsersProps {
  onGenerateUsers: () => void;
  disabled?: boolean;
}

export const GenerateUsersButton = (props: IGenerateUsersProps) => {
  const { onGenerateUsers, disabled } = props;

  return (
    <ButtonWrapper>
      <Button text={'Generate'} onClick={onGenerateUsers} disabled={disabled} />
    </ButtonWrapper>
  );
};
