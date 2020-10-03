import { func, bool } from 'prop-types';

export const propTypes = {
  loading: bool.isRequired,
  dispatch: func.isRequired,
};
