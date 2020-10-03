import { actionTypes } from '../../actions/weather';
import { getDateList } from '../../utils';

const INITIAL_STATE = {
  cityNames: [],
  data: [],
  error: false,
  loading: true,
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.WEATHER_DATA_SET:
      return {
        ...state,
        cityNames: [action.payload.data.city.name, ...state.cityNames],
        data: [action.payload.data, ...state.data],
        selectedCity: action.payload.data.city.name,
        // first date out of date list will be the current day
        selectedDate: getDateList(action.payload.data)[0],
        loading: false,
      };
    case actionTypes.SELECTED_CITY_SET:
      return {
        ...state,
        selectedCity: action.payload.city,
      };
    case actionTypes.SELECTED_DATE_SET:
      return {
        ...state,
        selectedDate: action.payload.date,
      };

    case actionTypes.WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.data,
      };
    default:
      return state;
  }
};
