import { all, call } from 'redux-saga/effects';
import alert from './alert';
import confirm from './confirm';

export default function* rootSaga() {
  yield all([
    call(alert),
    call(confirm),
  ]);
}
