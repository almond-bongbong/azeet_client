import { eventChannel, END } from 'redux-saga';
import { all, fork, call, put, take, takeLatest } from 'redux-saga/effects';
import { confirmActions, types } from 'store/modules/confirm';

const confirmChannel = () => eventChannel((emit) => {
  window.callbackStore = { ...window.callbackStore, confirm: isConfirmed => emit(isConfirmed) };
  return () => emit(END);
});

function* confirm({ payload }) {
  const channel = yield call(confirmChannel);
  const isConfirmed = yield take(channel);
  yield call(payload.resolve, isConfirmed);
  yield put(confirmActions.close());
}

function* watchConfirm() {
  yield takeLatest(types.OPEN, confirm);
}

export default function* confirmSaga() {
  yield all([
    fork(watchConfirm),
  ]);
}
