import { combineReducers } from 'redux';
import alert from './alert';
import confirm from './confirm';
import toast from './toast';
import auth from './auth';
import pending from './pending';

export default combineReducers({
  alert,
  confirm,
  toast,
  auth,
  pending,
});
