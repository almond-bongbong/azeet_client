import React from 'react';
import ReactDOM from 'react-dom';
import configStore from 'store/configure';
import { Provider } from 'react-redux';
import Home from 'pages';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = configStore();
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
