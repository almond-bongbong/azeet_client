import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const types = {
  TOAST: 'toast/TOAST',
  DEQUEUE: 'toast/DEQUEUE',
};

export const toastActions = {
  toast: createAction(types.TOAST),
  dequeue: createAction(types.DEQUEUE),
};

const initialState = [];

export default handleActions({
  [types.TOAST]: (state, { payload }) => produce(state, (draft) => {
    draft.push({ id: draft.length, message: payload });
  }),
  [types.DEQUEUE]: state => produce(state, (draft) => {
    draft.shift();
  }),
}, initialState);
