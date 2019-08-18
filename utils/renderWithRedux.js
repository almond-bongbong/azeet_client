import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configStore from 'store/configure';

function renderWithRedux(ui, initialState) {
  const store = configStore(initialState);
  const utils = render(
    <Provider store={store}>
      {ui}
    </Provider>,
  );
  return {
    ...utils,
    store,
  };
}

export default renderWithRedux;
