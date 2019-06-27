import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const toastTypes = {
  TOAST: 'toast/TOAST',
  PUSH: 'toast/PUSH',
  DELETE: 'toast/DELETE',
};

export const toastActions = {
  toast: createAction(toastTypes.TOAST),
  push: createAction(toastTypes.PUSH),
  delete: createAction(toastTypes.DELETE),
};

const initialState = [];

export default handleActions({
  [toastTypes.PUSH]: (state, { payload }) => produce(state, (draft) => {
    const { id, message } = payload;
    draft.push({ id, message });
  }),
  [toastTypes.DELETE]: (state, { payload }) => produce(state, (draft) => {
    draft.splice(draft.findIndex(t => t.id === payload), 1);
  }),
}, initialState);
