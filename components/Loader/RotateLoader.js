import React from 'react';
import styled, { keyframes } from 'styled-components';

const style = {
  thick: 2,
};
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RotateLoaderStyle = styled.div`
  position: relative;
  .loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: ${style.thick}px solid transparent;
    border-top-color: #ff69b4;
    animation: ${spin} 2s linear infinite;
  }
  .loader:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    border: ${style.thick}px solid transparent;
    border-top-color: #da032c;
    animation: ${spin} 3s linear infinite;
  }
  .loader:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    border-radius: 50%;
    border: ${style.thick}px solid transparent;
    border-top-color: #ff5071;
    animation: ${spin} 1s linear infinite;
  }
`;

const RotateLoader = () => (
  <RotateLoaderStyle>
    <div className="loader" />
  </RotateLoaderStyle>
);

export default RotateLoader;
