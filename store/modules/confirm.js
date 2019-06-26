import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const types = {
  OPEN: 'confirm/OPEN',
  CLOSE: 'confirm/CLOSE',
};

export const confirmActions = {
  open: createAction(types.OPEN),
  close: createAction(types.CLOSE),
  confirm: message => dispatch => new Promise((resolve) => {
    dispatch(confirmActions.open({ message, resolve }));
  }),
};

const initialState = {
  show: false,
  message: null,
};

export default handleActions({
  [types.OPEN]: (state, { payload }) => produce(state, (draft) => {
    draft.show = true;
    draft.message = payload.message;
  }),
  [types.CLOSE]: state => produce(state, (draft) => {
    draft.show = false;
  }),
}, initialState);
