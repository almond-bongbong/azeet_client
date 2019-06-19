import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hidden, blue, alignY } from 'style/mixin';

const BasicCheckboxStyle = styled.div`
  display: inline-block;
  & label {
    display: block;
  }
  & input {
    ${hidden}
    &:checked {
      & + span {
        &:before {
          border: 1px solid ${blue};
          background-color: ${blue};
        }
        &:after {
          display: block;
        }
      }
    }
    &:disabled {
      & + span {
        opacity: 0.6;
      }
    }
  }
  & span {
    display: block;
    position: relative;
    height: 18px;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    
  ${props => (props.label
    ? css`padding-left: 25px;`
    : css`padding-left: 18px;`
  )}
    
    &:before {
      ${alignY};
      content: '';
      display: block;
      left: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #ddd;
      border-radius: 1px;
      background-color: #fff;
    }
    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 3px;
      left: 7px;
      width: 5px;
      height: 9px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
`;

const Checkbox = ({
  id, label, checked, onChange, disabled, value,
}) => (
  <BasicCheckboxStyle label={label}>
    <label htmlFor={id}>
      <input type="checkbox" id={id} checked={checked} disabled={disabled} value={value} onChange={onChange} />
      <span>{label}</span>
    </label>
  </BasicCheckboxStyle>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: '',
  value: undefined,
  checked: false,
  disabled: false,
};

export default Checkbox;
