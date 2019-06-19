import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hidden, blue } from 'style/mixin';

const FancyCheckboxStyle = styled.div`
  display: inline-block;
  & label {
    display: block;
    cursor:pointer;
  }
  & input {
    ${hidden}
    &:checked {
      & + span {
        padding-left: 10px;
        color: #fff;
        &:before {
          top: 0;
          width: 100%;
          height: 100%;
          border: 2px solid ${blue};
          background: ${blue};
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
    position: relative;
    display: block;
    padding-left: 25px;
    padding-right: 10px;
    cursor: pointer;
    transition: .25s all ease;
    &:before {
      content: " ";
      position: absolute;
      top: 5px;
      left: 0;
      display: block;
      width: 18px;
      height: 18px;
      border: 2px solid #ccc;
      border-radius: 16px;
      transition: .25s all ease;
    }
    & i {
      position: relative;
      z-index: 1;
      font-style: normal;
      font-size: 14px;
      line-height: 28px;
    }
  }
`;

const FancyRadio = ({
  id, label, checked, onChange, disabled, value,
}) => (
  <FancyCheckboxStyle label={label}>
    <label htmlFor={id}>
      <input type="radio" id={id} disabled={disabled} checked={checked} value={value} onChange={onChange} />
      <span><i>{label}</i></span>
    </label>
  </FancyCheckboxStyle>
);

FancyRadio.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

FancyRadio.defaultProps = {
  checked: false,
  disabled: false,
  value: undefined,
};

export default FancyRadio;
