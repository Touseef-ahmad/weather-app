import * as actionTypes from './types';

export const setTheme = themeType => ({
  type: actionTypes.THEME_SET,
  payload: { themeType },
});
