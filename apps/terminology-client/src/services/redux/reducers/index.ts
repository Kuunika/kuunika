import { combineReducers } from 'redux';
import ui from './ui-reducer';
import status from './status_reducer';
import errors from './errors_reducer';
import data from './data_reducer';

const rootReducer = combineReducers({
  ui,
  loading: status,
  errors,
  data
});

export default rootReducer;
