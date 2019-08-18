import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import GlobalStyle from 'style/GlobalStyle';
import configStore from 'store/configure';

const DoczWrapper = ({ children }) => (
  <Provider store={configStore()}>
    <GlobalStyle />
    {children}
  </Provider>
);

DoczWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DoczWrapper;
