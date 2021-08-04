import { AccountForm } from './account';

import { PageWrapper } from './styles';

export const CreateUserForm = () => {
  return (
    <PageWrapper>
      <h2>Adding user</h2>

      <AccountForm />
    </PageWrapper>
  );
};
