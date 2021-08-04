import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'UI/header';
import { CreateUserForm } from 'features/users/create-user/forms';

import './App.css';
import { blueTheme } from 'styles/themes/blueTheme';

const App = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <div className="App">
        <Header />
        <CreateUserForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
