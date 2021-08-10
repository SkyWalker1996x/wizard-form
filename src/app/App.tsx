import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'UI/Header';
import { CreateUserForm } from 'features/users/create-user';

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
