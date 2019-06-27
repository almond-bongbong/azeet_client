import { eventChannel, END } from 'redux-saga';
import { all, fork, call, put, take, takeLatest } from 'redux-saga/effects';
import { alertActions, alertTypes } from 'store/modules/alert';

const alertChannel = () => eventChannel((emit) => {
  window.callbackStore = { ...window.callbackStore, alert: () => emit(true) };
  return () => emit(END);
});

function* alert({ payload }) {
  const channel = yield call(alertChannel);
  yield take(channel);
  yield call(payload.resolve);
  yield put(alertActions.close());
}

function* watchAlert() {
  yield takeLatest(alertTypes.OPEN, alert);
}

export default function* alertSaga() {
  yield all([
    fork(watchAlert),
  ]);
}
