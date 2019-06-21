import { combineReducers } from 'redux';
import alertModule from './alert';
import confirmModule from './confirm';

export default combineReducers({
  alert: alertModule,
  confirm: confirmModule,
});
