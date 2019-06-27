import { all, fork, put, takeEvery, delay, select } from 'redux-saga/effects';
import { toastActions, toastTypes } from 'store/modules/toast';

function* toast({ payload }) {
  const message = typeof payload === 'string' ? payload : payload.message;
  const time = payload.time || 3000;
  const toasts = yield select(state => state.toast);
  const id = toasts.length;
  yield put(toastActions.push({ id, message }));
  yield delay(time);
  yield put(toastActions.delete(id));
}

function* watchToast() {
  yield takeEvery(toastTypes.TOAST, toast);
}

export default function* toastSaga() {
  yield all([
    fork(watchToast),
  ]);
}
