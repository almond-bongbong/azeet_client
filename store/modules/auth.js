import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const accountTypes = {
  LOGIN_WITH_KAKAO: 'account/LOGIN_WITH_KAKAO',
  SET_ACCOUNT: 'account/SET_ACCOUNT',
};

export const accountActions = {
  loginWithKakao: createAction(accountTypes.LOGIN_WITH_KAKAO),
  setAccount: createAction(accountTypes.SET_ACCOUNT),
};

const initialState = {
  user: null,
};

export default handleActions({
  [accountTypes.SET_ACCOUNT]: (state, { payload }) => produce(state, (draft) => {
    draft.user = payload;
  }),
}, initialState);
