import React from 'react';
import { Provider } from 'react-redux';
import { HomePage } from './pages/home-page';
import { ThemeProvider } from './styles';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </Provider>
  );
};
