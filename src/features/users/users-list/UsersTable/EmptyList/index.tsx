import { useHistory } from 'react-router-dom';

import { Button } from 'UI/Button/Button';
import { Text } from 'UI/Text';

import { EmptyListWrapper } from './styles';
import { useCallback } from 'react';

export const EmptyList = () => {
  const history = useHistory();

  const toCreateUser = useCallback(() => {
    history.push('/create-user');
  }, [history]);

  return (
    <EmptyListWrapper>
      <Text text="No users here :(" fontSize="35px" fontWeight="700" color="gray100" />

      <Button text="Create new user" width="auto" onClick={toCreateUser} />
    </EmptyListWrapper>
  );
};
