import { func, bool } from 'prop-types';

export const propTypes = {
  isLoading: bool.isRequired,
  dispatch: func.isRequired,
};
