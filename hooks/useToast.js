import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toastActions } from 'store/modules/toast';

const useToast = () => {
  const dispatch = useDispatch();
  return useCallback((message) => {
    dispatch(toastActions.toast(message));
  }, [dispatch]);
};

export default useToast;
