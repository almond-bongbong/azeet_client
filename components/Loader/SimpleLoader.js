import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blue, red, yellow } from 'style/mixin';
import hexToRgb from 'lib/hexToRgb';
import { rotation } from 'style/animations';

export const SimpleLoaderStyle = styled.div`
  position: relative;
  .circle-loader {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin: 0 auto;
    border: ${props => (props.size > 20 ? 2 : 1)}px solid transparent;
    border-radius: 50%;
    color: ${red};
    animation: ${rotation} .8s ease infinite;
    ${props => props.theme === 'red' && css`
      border-top-color: rgba(${hexToRgb(red, 0.9)});
      border-bottom-color: rgba(${hexToRgb(red, 0.9)});
    `}
    ${props => props.theme === 'blue' && css`
      border-top-color: rgba(${hexToRgb(blue, 0.9)});
      border-bottom-color: rgba(${hexToRgb(blue, 0.9)});
    `}
    ${props => props.theme === 'white' && css`
      border-top-color: rgba(255,255,255,0.9);
      border-bottom-color: rgba(255,255,255,0.9);
    `}
    ${props => props.theme === 'gray' && css`
      border-top-color: rgba(100,100,100,0.9);
      border-bottom-color: rgba(100,100,100,0.9);
    `}
    ${props => props.theme === 'yellow' && css`
      border-top-color: rgba(${hexToRgb(yellow, 0.9)});
      border-bottom-color: rgba(${hexToRgb(yellow, 0.9)});
    `}
  }
`;

const SimpleLoader = ({ theme, size }) => (
  <SimpleLoaderStyle theme={theme} size={size}>
    <div className="circle-loader" title="로딩중" />
  </SimpleLoaderStyle>
);

SimpleLoader.propTypes = {
  theme: PropTypes.oneOf(['red', 'blue', 'white', 'gray', 'yellow']),
  size: PropTypes.number,
};

SimpleLoader.defaultProps = {
  theme: 'red',
  size: 60,
};

export default SimpleLoader;
