import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { alertActions } from 'store/modules/alert';

const useAlert = () => {
  const dispatch = useDispatch();
  return useCallback((message) => {
    dispatch(alertActions.alert(message));
  }, [dispatch]);
};

export default useAlert;
