import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from 'style/GlobalStyle';
import configStore from 'store/configure';
import Alert from 'components/Alert';
import Confirm from 'components/Confirm';
import Toast from 'components/Toast';

const DoczWrapper = ({ children }) => (
  <Provider store={configStore()}>
    <GlobalStyle />
    {children}

    <Alert />
    <Confirm />
    <Toast />
  </Provider>
);

DoczWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoczWrapper;
