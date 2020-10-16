import * as actionTypes from './types';
import { fetchCityWeather } from '../../api';

export const onFetchWeatherDataSuccess = data => ({
  type: actionTypes.WEATHER_DATA_SET,
  payload: { data },
});

export const onSelectDay = (cityName, date) => ({
  type: actionTypes.SELECTED_DATE_SET,
  payload: { cityName, date },
});

export const onFetchWeatherDataFailure = errorMessage => ({
  type: actionTypes.WEATHER_DATA_FETCH_FAILURE,
  payload: { errorMessage },
});

export const onFetchWeatherDataAttempt = () => ({
  type: actionTypes.WEATHER_DATA_FETCH_ATTEMPT,
});

export const onNoResultFound = () => ({
  type: actionTypes.RESULTS_NOT_FOUND,
});
export const fetchWeatherData = city => async dispatch => {
  dispatch(onFetchWeatherDataAttempt());
  try {
    const response = await fetchCityWeather(city);
    dispatch(onFetchWeatherDataSuccess(response.data));
  } catch (error) {
    if (error.response?.status === 404) {
      dispatch(onNoResultFound());
    } else {
      dispatch(onFetchWeatherDataFailure(error.message));
    }
  }
};
