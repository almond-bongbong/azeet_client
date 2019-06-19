import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { red, green } from 'style/mixin';
import hexToRgb from 'lib/hexToRgb';

const BasicInputStyle = styled.div`
  display: block;
  border-radius: 3px;
  
  & > input {
    box-sizing: border-box;
    display: block;    
    width: 100%;
    height: ${props => props.size}px;
    padding: 0 15px;
    border: 1px solid #ddd;
    outline: 0;
    font-size: 13px;
    line-height: ${props => props.size}px;
  }
  
  ${props => props.theme === 'line' && css`
    & > input {
      border: 0;
      border-bottom: 1px solid #ddd;
    }
  `}
  
  ${props => props.status === 'warning' && css`
    & > input {
      border: 1px solid rgba(${hexToRgb(red)},0.5);
      box-shadow: 0 0 1px 1px rgba(${hexToRgb(red)},0.3);
    }
  `}
  
  ${props => props.status === 'correct' && css`
    & > input {
      border: 1px solid rgba(${hexToRgb(green)},0.5);
      box-shadow: 0 0 1px 1px rgba(${hexToRgb(green)},0.3);
    }
  `}
  
  & .warning {
    margin-top: 5px;
    color: ${red};
    font-size: 13px;
  }
`;

const Input = ({
  type, theme, placeholder, value, size, status, warningMessage, onChange,
}) => (
  <BasicInputStyle size={size} theme={theme} status={status}>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    {(status === 'warning' && warningMessage) && <div className="warning">{warningMessage}</div>}
  </BasicInputStyle>
);

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  theme: PropTypes.oneOf(['line']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf([30, 40, 50]),
  status: PropTypes.oneOf(['warning', 'correct']),
  warningMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  theme: undefined,
  placeholder: '',
  value: '',
  size: 40,
  status: undefined,
  warningMessage: '',
};

export default Input;
