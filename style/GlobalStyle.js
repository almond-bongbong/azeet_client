import { createGlobalStyle, keyframes } from 'styled-components';
import { blue } from 'style/mixin';

const fontFamily = 'Noto Serif KR, Apple SD Gothic Neo, Malgun Gothic, sans-serif;';
const nprogressSpinner = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
  }
  
  ul, ol {
      list-style: none;
  }
  
  img {
      border: 0;
      vertical-align: middle;
  }
  
  button {
      margin: 0;
      padding: 0;
      border: 0;
      color: inherit;
      background: none;
      cursor: pointer;
  }
  button span {
      position: relative;
  }
  
  body {
      max-width: 100vw;
      background-color: #2d2d33;
      color: #aaa;
      font-size: 14px;
      line-height: 1.5;
      font-family: ${fontFamily};
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
  }
  
  a, button {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      line-height: 1.5;
      font-family: ${fontFamily};
  }
  
  button {
      outline: 0;
      padding: 0;
      background: none;
      span {
          position: relative;
      }
  }
  
  .hidden {
      overflow: hidden;
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: 0;
      height: 0;
  }
  
  input[type="text"],
  input[type="password"],
  textarea,
  select,
  input[type="checkbox"] + label,
  input[type="radio"] + label{
      border-radius: 0;
      color: #777;
      font: 14px/1.5 ${fontFamily};
      vertical-align: middle;
  }
  em {
      font-style: normal;
  }
  a:focus {
      outline: none;
  }
  a::selection {
      background: transparent;
      pointer-events: none;
  }
  
  input[type="text"] {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
  }
  input[type="text"]:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
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
  
  #popup_container {
    position: relative;
    z-index: 10000;
  }
  
  #popup_container > div {
    position: relative;
    z-index: 1000;
  }
`;
