import * as actionTypes from './types';
import { fetchCityWeather } from '../../api';

export const setWeatherData = data => ({
  type: actionTypes.WEATHER_DATA_SET,
  payload: { data },
});

export const setSelectedCity = city => ({
  type: actionTypes.SELECTED_CITY_SET,
  payload: { city },
});

export const setSelectedDate = date => ({
  type: actionTypes.SELECTED_DATE_SET,
  payload: { date },
});

export const getWeatherDataFailure = errorMessage => ({
  type: actionTypes.WEATHER_DATA_FAILURE,
  payload: { errorMessage },
});

export const fetchWeatherData = city => async dispatch => {
  const result = await fetchCityWeather(city);
  if (result.message) {
    dispatch(getWeatherDataFailure(result.message));
  } else {
    dispatch(setWeatherData(result.data));
  }
};
