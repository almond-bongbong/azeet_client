import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutStyle = styled.div`
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
