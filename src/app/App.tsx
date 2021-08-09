import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'UI/header';
import { CreateUserForm } from 'features/users/create-user/forms';

import { blueTheme } from 'styles/themes/blueTheme';

const App = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <Header />
      <CreateUserForm />
    </ThemeProvider>
  );
};

export default App;
