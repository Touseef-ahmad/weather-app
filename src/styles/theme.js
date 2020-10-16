const THEME = {
  fontFamily: 'monospace',
}; // common

export const THEME_TYPES = {
  LIGHT: 'LIGHT',
};

export const THEMES = {
  [THEME_TYPES.LIGHT]: {
    ...THEME,
    backgroundColor: '#F7EBDE',
    primaryColor: '#1EA896',
    secondaryColor: '#FF715B',
    secondaryGreyColor: '#4C5454',
  },
};
