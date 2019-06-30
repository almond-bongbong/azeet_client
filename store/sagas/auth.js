import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { accountActions, accountTypes } from 'store/modules/auth';
import Router from 'next/router';
import { auth, authKakao } from 'api/auth';
import Cookie from 'js-cookie';
import { setAuthorization } from 'config/configureAxios';
import { toastActions } from 'store/modules/toast';
import { pendingActions } from 'store/modules/pending';

// 7 days
const TOKEN_EXPIRES = 7;

function* loginWithKakao({ type, payload }) {
  try {
    yield put(pendingActions.pending(type));
    const res = yield call(authKakao, payload);

    Cookie.set('authorization', res.accessToken, { expires: TOKEN_EXPIRES });
    setAuthorization();

    const user = yield call(auth);
    yield put(toastActions.toast('로그인 되었습니다'));
    yield put(accountActions.setAccount(user));
    Router.replace('/');
  } catch (e) {
    yield put(toastActions.toast('문제가 발생했습니다'));
  } finally {
    yield put(pendingActions.finally(type));
  }
}

function* watchLoginWithKakao() {
  yield takeLatest(accountTypes.LOGIN_WITH_KAKAO, loginWithKakao);
}

export default function* accountSaga() {
  yield all([
    fork(watchLoginWithKakao),
  ]);
}
