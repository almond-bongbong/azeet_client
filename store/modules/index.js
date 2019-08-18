import { combineReducers } from 'redux';
import auth from './auth';
import bookmark from './bookmark';
import pending from './pending';

export default combineReducers({
  auth,
  bookmark,
  pending,
});
