import { func, string, array } from 'prop-types';

export const propTypes = {
  cityNames: array.isRequired,
  data: array.isRequired,
  selectedCity: string.isRequired,
  selectedDate: string.isRequired,
  dispatch: func.isRequired,
};
