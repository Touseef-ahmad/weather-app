import { actionTypes } from '../../actions/weather';
import { getDateList } from '../../utils';

const INITIAL_STATE = {
  data: [],
  empty: false,
  error: false,
  isLoading: true,
  selectedDate: {},
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.WEATHER_DATA_SET:
      return {
        ...state,
        data: [action.payload.data, ...state.data],
        isLoading: false,
        empty: false,
        // first date out of date list will be the current day
        selectedDate: {
          ...state.selectedDate,
          [action.payload.data.city.name]: getDateList(action.payload.data)[0],
        },
      };
    case actionTypes.WEATHER_DATA_FETCH_ATTEMPT:
      return {
        ...state,
        empty: false,
        error: false,
        isLoading: true,
      };
    case actionTypes.SELECTED_DATE_SET:
      return {
        ...state,
        selectedDate: {
          ...state.selectedDate,
          [action.payload.cityName]: action.payload.date,
        },
      };
    case actionTypes.RESULTS_NOT_FOUND:
      return {
        ...state,
        empty: true,
        isLoading: false,
      };
    case actionTypes.WEATHER_DATA_FETCH_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
        isLoading: false,
      };
    default:
      return state;
  }
};
