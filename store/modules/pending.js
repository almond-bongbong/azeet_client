import { handleActions, createAction } from 'redux-actions';
import { produce } from 'immer';

export const pendingTypes = {
  PENDING: 'pending/PENDING',
  FINALLY: 'pending/FINALLY',
};

export const pendingActions = {
  pending: createAction(pendingTypes.PENDING),
  finally: createAction(pendingTypes.FINALLY),
};

const initialState = {};

export default handleActions({
  [pendingTypes.PENDING]: (state, { payload }) => produce(state, (draft) => {
    draft[payload] = true;
  }),
  [pendingTypes.FINALLY]: (state, { payload }) => produce(state, (draft) => {
    draft[payload] = false;
  }),
}, initialState);
