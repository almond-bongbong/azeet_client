import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const types = {
  OPEN: 'alert/OPEN',
  CLOSE: 'alert/CLOSE',
};

export const alertActions = {
  open: createAction(types.OPEN),
  close: createAction(types.CLOSE),
};

export const alert = message => dispatch => new Promise((resolve) => {
  dispatch(alertActions.open({ message, resolve }));
});

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