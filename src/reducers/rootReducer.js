import { combineReducers } from 'redux';
import { themeReducer } from './theme';
import { weatherReducer } from './weather';

export const rootReducer = combineReducers({
  themeReducer,
  weatherReducer,
});
