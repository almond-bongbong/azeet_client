import React from 'react';
import { render } from '@testing-library/react';
import store from 'store/configure';
import { Provider } from 'react-redux';

function renderWithRedux(ui) {
  const utils = render(<Provider store={store}>{ui}</Provider>);
  return {
    ...utils,
    store,
  };
}

export default renderWithRedux;
