import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configStore from 'store/configure';
import Alert from 'components/Alert';
import Confirm from 'components/Confirm';
import Toast from 'components/Toast';

function renderWithRedux(ui, initialState) {
  const store = configStore(initialState);
  const utils = render(
    <Provider store={store}>
      {ui}
      <Alert />
      <Confirm />
      <Toast />
    </Provider>,
  );
  return {
    ...utils,
    store,
  };
}

export default renderWithRedux;
