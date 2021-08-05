import { AccountForm } from './Account';

import { PageWrapper } from './styles';

export const CreateUserForm = () => {
  return (
    <PageWrapper>
      <h2>Adding user</h2>

      <AccountForm />
    </PageWrapper>
  );
};
