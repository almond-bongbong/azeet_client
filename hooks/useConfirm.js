import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { confirmActions } from 'store/modules/confirm';

const useConfirm = () => {
  const dispatch = useDispatch();
  return useCallback(message => dispatch(confirmActions.confirm(message)), [dispatch]);
};

export default useConfirm;
