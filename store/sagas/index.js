import { all, fork } from 'redux-saga/effects';
import alert from './alert';
import confirm from './confirm';
import toast from './toast';
import auth from './auth';

export default function* rootSaga() {
  yield all([
    fork(alert),
    fork(confirm),
    fork(toast),
    fork(auth),
  ]);
}
