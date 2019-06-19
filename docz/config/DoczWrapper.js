import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from 'style/GlobalStyle';
import store from 'store/configure';
import Alert from 'components/Alert';
import 'static/5459466d0f';

const DoczWrapper = ({ children }) => (
  <Provider store={store}>
    <GlobalStyle />
    {children}

    <Alert />
  </Provider>
);

DoczWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoczWrapper;
