import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const BasicSelectStyle = styled.div`
  display: block;
  width: 100%;
  position: relative;
  
  ${props => props.inline && css`
    display: inline-block;
    width: 140px;
  `}
  
  & > select {
    display: block;
    width: 100%;
    height: ${props => props.size}px;
    padding: 0 22px 0 15px;
    border: 1px solid #ddd;
    border-radius: 0;
    outline: 0;
    background-color: #fff;
    font-size: 13px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
  }
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -3px;
  }
  
  ${props => props.theme === 'line' && css`
    & select {
      border: 0;
      border-bottom: 1px solid #ddd;
    }
  `}
`;

const Select = ({
  children, theme, onChange, value, inline, size,
}) => (
  <BasicSelectStyle inline={inline} theme={theme} size={size}>
    <select onChange={onChange} value={value}>
      {children}
    </select>
  </BasicSelectStyle>
);

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  theme: PropTypes.oneOf(['line']),
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool,
  size: PropTypes.oneOf([30, 40, 50]),
};

Select.defaultProps = {
  inline: false,
  theme: undefined,
  size: 40,
};

export default Select;
