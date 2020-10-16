import { actionTypes } from '../../actions/theme';
import { THEMES } from '../../styles';

const INITIAL_STATE = {
  theme: THEMES.LIGHT,
};

export const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.THEME_SET:
      return {
        theme: THEMES[action.payload.themeType],
      };
    default:
      return state;
  }
};
