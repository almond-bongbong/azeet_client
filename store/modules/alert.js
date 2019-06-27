import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const alertTypes = {
  OPEN: 'alert/OPEN',
  CLOSE: 'alert/CLOSE',
};

export const alertActions = {
  open: createAction(alertTypes.OPEN),
  close: createAction(alertTypes.CLOSE),
  alert: message => dispatch => new Promise((resolve) => {
    dispatch(alertActions.open({ message, resolve }));
  }),
};

const initialState = {
  show: false,
  message: null,
};

export default handleActions({
  [alertTypes.OPEN]: (state, { payload }) => produce(state, (draft) => {
    draft.show = true;
    draft.message = payload.message;
  }),
  [alertTypes.CLOSE]: state => produce(state, (draft) => {
    draft.show = false;
  }),
}, initialState);
