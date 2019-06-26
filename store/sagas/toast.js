import { all, fork, put, takeEvery, delay } from 'redux-saga/effects';
import { toastActions, types } from 'store/modules/toast';

function* toast() {
  yield delay(3000);
  yield put(toastActions.dequeue());
}

function* watchToast() {
  yield takeEvery(types.TOAST, toast);
}

export default function* toastSaga() {
  yield all([
    fork(watchToast),
  ]);
}
