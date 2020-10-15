import * as actionTypes from './types';
import { fetchCityWeather } from '../../api';

export const onFetachWeatherDataSuccess = data => ({
  type: actionTypes.WEATHER_DATA_SET,
  payload: { data },
});

export const onSelectDay = (cityName, date) => ({
  type: actionTypes.SELECTED_DATE_SET,
  payload: { cityName, date },
});

export const onFetachWeatherDataFailure = errorMessage => ({
  type: actionTypes.WEATHER_DATA_FAILURE,
  payload: { errorMessage },
});
export const onFetachWeatherDataAttempt = () => ({
  type: actionTypes.WEATHER_DATA_ATTEMPT,
});
export const fetchWeatherData = city => async dispatch => {
  try {
    const response = await fetchCityWeather(city);
    dispatch(onFetachWeatherDataSuccess(response.data));
  } catch (error) {
    dispatch(onFetachWeatherDataFailure(error.message));
  }
};
