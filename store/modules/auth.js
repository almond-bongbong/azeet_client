import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const authTypes = {
  AUTH: 'auth/AUTH',
  LOGIN_WITH_KAKAO: 'auth/LOGIN_WITH_KAKAO',
  LOGOUT: 'auth/LOGOUT',
  SET_USER: 'auth/SET_USER',
};

export const authActions = {
  auth: createAction(authTypes.AUTH),
  loginWithKakao: createAction(authTypes.LOGIN_WITH_KAKAO),
  setUser: createAction(authTypes.SET_USER),
};

const initialState = {
  user: null,
};

export default handleActions({
  [authTypes.SET_USER]: (state, { payload }) => produce(state, (draft) => {
    draft.user = payload;
  }),
}, initialState);
