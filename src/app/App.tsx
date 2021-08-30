import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from 'UI/Header';
import { CreateUserForm } from 'features/user/create-user';
import { UserListPage } from 'features/users/users-list';
import { UserInfoPage } from 'features/user/user-info';

import { blueTheme } from 'styles/themes/blueTheme';

const App = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <Header />
      <Switch>
        <Route exact path="/" component={UserListPage} />
        <Route path="/create-user" component={CreateUserForm} />
        <Route path="/user/:id" component={UserInfoPage} />

        <Redirect to="/" />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
