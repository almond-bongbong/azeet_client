import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

export const bookmarkTypes = {
  FETCH_LIST: 'bookmark/FETCH_LIST',
  SET_LIST: 'bookmark/SET_LIST',
};

export const bookmarkActions = {
  fetchList: createAction(bookmarkTypes.FETCH_LIST),
  setList: createAction(bookmarkTypes.SET_LIST),
};

const initialState = {
  bookmarks: [],
};

export default handleActions({
  [bookmarkTypes.SET_LIST]: (state, { payload }) => produce(state, (draft) => {
    draft.bookmarks = payload.items;
  }),
}, initialState);
