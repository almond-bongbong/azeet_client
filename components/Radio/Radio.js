import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { hidden, blue, alignY } from 'style/mixin';

const BasicRadioStyle = styled.div`
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
        }
        &:after {
          transform: scale(1);
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
      border-radius: 50%;
      background-color: #fff;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 4px;
      left: 4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${blue};
      transform: scale(0);
      transition: transform .2s cubic-bezier(0.82, 0.64, 0.54, 1.51);
    }
  }
`;

const Checkbox = ({
  id, label, checked, onChange, disabled, value,
}) => (
  <BasicRadioStyle label={label}>
    <label htmlFor={id}>
      <input type="radio" id={id} checked={checked} disabled={disabled} value={value} onChange={onChange} />
      <span>{label}</span>
    </label>
  </BasicRadioStyle>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: '',
  checked: false,
  disabled: false,
  value: undefined,
};

export default Checkbox;
