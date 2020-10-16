import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { propTypes } from './prop-types';

const CustomThemeProvider = ({ theme, children }) => (
  <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
);

CustomThemeProvider.propTypes = propTypes;

const mapStateToProps = state => ({
  theme: state.themeReducer.theme,
});

export const ThemeProvider = connect(mapStateToProps)(CustomThemeProvider);
