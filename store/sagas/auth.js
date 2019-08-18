import { all, fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { authActions, authTypes } from 'store/modules/auth';
import { auth, authKakao } from 'api/auth';
import Cookie from 'js-cookie';
import { setAuthorization } from 'config/configureAxios';
import { toast } from 'components/Feedback';
import { pendingActions } from 'store/modules/pending';

const TOKEN_EXPIRES_DAYS = 7;
const AUTH_COOKIE = 'authorization';

function* fetchAuth({ type }) {
  try {
    const token = Cookie.get(AUTH_COOKIE);
    if (token) {
      yield put(pendingActions.pending(type));
      const user = yield call(auth);
      yield put(authActions.setUser(user));
    }
  } catch (e) {
    if (e.status === 401) Cookie.remove(AUTH_COOKIE);
  } finally {
    yield put(pendingActions.finally(type));
  }
}

function* loginWithKakao({ type, payload }) {
  try {
    yield put(pendingActions.pending(type));
    const res = yield call(authKakao, payload);

    Cookie.set(AUTH_COOKIE, res.accessToken, { expires: TOKEN_EXPIRES_DAYS });
    setAuthorization();

    const user = yield call(auth);
    const { next } = Router.query;
    yield call(toast, '로그인 되었습니다');
    yield put(authActions.setUser(user));
    yield call(Router.replace, next || '/');
  } catch (e) {
    yield call(toast, '문제가 발생했습니다');
  } finally {
    yield put(pendingActions.finally(type));
  }
}

function* logout() {
  yield call(Cookie.remove, 'authorization');
  yield call(Router.replace, '/');
}

function* watchAuth() {
  yield takeLatest(authTypes.AUTH, fetchAuth);
}

function* watchLoginWithKakao() {
  yield takeLatest(authTypes.LOGIN_WITH_KAKAO, loginWithKakao);
}

function* watchLogout() {
  yield takeEvery(authTypes.LOGOUT, logout);
}

export default function* accountSaga() {
  yield all([
    fork(watchAuth),
    fork(watchLoginWithKakao),
    fork(watchLogout),
  ]);
}
