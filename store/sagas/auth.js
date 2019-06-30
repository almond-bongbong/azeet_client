import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { authActions, authTypes } from 'store/modules/auth';
import { auth, authKakao } from 'api/auth';
import Cookie from 'js-cookie';
import { setAuthorization } from 'config/configureAxios';
import { toastActions } from 'store/modules/toast';
import { pendingActions } from 'store/modules/pending';

// 7 days
const TOKEN_EXPIRES = 7;
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

    Cookie.set(AUTH_COOKIE, res.accessToken, { expires: TOKEN_EXPIRES });
    setAuthorization();

    const user = yield call(auth);
    yield put(toastActions.toast('로그인 되었습니다'));
    yield put(authActions.setUser(user));
  } catch (e) {
    yield put(toastActions.toast('문제가 발생했습니다'));
  } finally {
    yield put(pendingActions.finally(type));
  }
}

function* watchAuth() {
  yield takeLatest(authTypes.AUTH, fetchAuth);
}

function* watchLoginWithKakao() {
  yield takeLatest(authTypes.LOGIN_WITH_KAKAO, loginWithKakao);
}

export default function* accountSaga() {
  yield all([
    fork(watchAuth),
    fork(watchLoginWithKakao),
  ]);
}