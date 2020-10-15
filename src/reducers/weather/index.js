import { actionTypes } from '../../actions/weather';
import { getSelectedDateCityObj } from '../../utils';

const INITIAL_STATE = {
  data: [],
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
        // first date out of date list will be the current day
        selectedDate: { ...state.selectedDate, ...getSelectedDateCityObj(action.payload.data) },
      };
    case actionTypes.WEATHER_DATA_ATTEMPT:
      return {
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

    case actionTypes.WEATHER_DATA_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.data,
        isLoading: false,
      };
    default:
      return state;
  }
};
