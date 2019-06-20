import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store/configure';
import { Provider } from 'react-redux';
import Home from 'pages';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
