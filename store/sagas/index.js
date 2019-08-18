import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import bookmark from './bookmark';

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(bookmark),
  ]);
}
