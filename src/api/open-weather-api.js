import axios from 'axios';
import { OPEN_WEATHER_API_URL } from './endpoints';
import { OPEN_WEATHER_API_KEY } from './api-key';

export const fetchCityWeather = async (city = 'London, GB') => {
  try {
    const response = await axios.get(OPEN_WEATHER_API_URL, {
      params: { q: city, appid: OPEN_WEATHER_API_KEY, units: 'metric' },
    });
    return response;
  } catch (err) {
    return err;
  }
};
