import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const confirmTypes = {
  OPEN: 'confirm/OPEN',
  CLOSE: 'confirm/CLOSE',
};

export const confirmActions = {
  open: createAction(confirmTypes.OPEN),
  close: createAction(confirmTypes.CLOSE),
  confirm: message => dispatch => new Promise((resolve) => {
    dispatch(confirmActions.open({ message, resolve }));
  }),
};

const initialState = {
  show: false,
  message: null,
};

export default handleActions({
  [confirmTypes.OPEN]: (state, { payload }) => produce(state, (draft) => {
    draft.show = true;
    draft.message = payload.message;
  }),
  [confirmTypes.CLOSE]: state => produce(state, (draft) => {
    draft.show = false;
  }),
}, initialState);
