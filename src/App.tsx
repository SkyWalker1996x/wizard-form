import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from 'UI/header';

import './App.css';
import { blueTheme } from 'styles/themes/blueTheme';

const App = () => {
  return (
    <ThemeProvider theme={blueTheme}>
      <div className="App">
        <Header />
        Wizard form task
      </div>
    </ThemeProvider>
  );
};

export default App;
