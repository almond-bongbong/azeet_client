import { createGlobalStyle, keyframes } from 'styled-components';
import { blue } from 'style/mixin';

const nprogressSpinner = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default createGlobalStyle`
  *, 
  *:before, 
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    color: #888;
    font-size: 13px;
    line-height: 1.5;
  }
  
  #nprogress {
      pointer-events: none;
  }
  
  #nprogress .bar {
      background: ${blue};
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
  }
  
  #nprogress .peg {
      display: block;
      position: absolute;
      right: 0;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #29d, 0 0 5px #29d;
      opacity: 1.0;
      transform: rotate(3deg) translate(0px, -4px);
  }
  
  #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
  }
  
  #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: solid 2px transparent;
      border-top-color: #29d;
      border-left-color: #29d;
      border-radius: 50%;
      animation: ${nprogressSpinner} 400ms linear infinite;
  }
  
  .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
  }
  
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
      position: absolute;
  }
`;
