import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonGroupStyle = styled.div`
  display: flex;
  & > * {
    flex: 1 0 auto;
    & + * {
      margin-left: 10px;
    }
  }
`;

const ButtonGroup = ({ children }) => (
  <ButtonGroupStyle>
    {children}
  </ButtonGroupStyle>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonGroup;
