import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { bookmarkActions, bookmarkTypes } from 'store/modules/bookmark';
import { getBookmarks } from 'api/bookmark';
import { toastActions } from 'store/modules/toast';
import { pendingActions } from 'store/modules/pending';

function* fetchList({ type }) {
  try {
    yield put(pendingActions.pending(type));
    const response = yield call(getBookmarks);
    yield put(bookmarkActions.setList(response));
  } catch (e) {
    if (e.response) yield put(toastActions.toast('문제가 발생했습니다'));
  } finally {
    yield put(pendingActions.finally(type));
  }
}

function* watchFetchList() {
  yield takeLatest(bookmarkTypes.FETCH_LIST, fetchList);
}

export default function* accountSaga() {
  yield all([
    fork(watchFetchList),
  ]);
}
