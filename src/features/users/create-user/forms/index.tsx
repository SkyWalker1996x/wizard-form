// import { AccountForm } from './Account';
import { ProfileForm } from './Profile';

import { PageWrapper } from './styles';

export const CreateUserForm = () => {
  return (
    <PageWrapper>
      <h2>Adding user</h2>

      {/*<AccountForm />*/}
      <ProfileForm />
    </PageWrapper>
  );
};
