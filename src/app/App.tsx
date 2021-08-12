import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from 'UI/Header';
import { CreateUserForm } from 'features/users/create-user';
import { UserListPage } from 'features/users/users-list';

import { blueTheme } from 'styles/themes/blueTheme';

const App = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <Header />
      <Switch>
        <Route exact path="/" component={UserListPage} />
        <Route exact path="/create-user" component={CreateUserForm} />

        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
