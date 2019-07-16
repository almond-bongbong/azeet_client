import React from 'react';
import { useSelector } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';

const ToastStyle = styled.div`
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 1000;
  transform: translateZ(0);
  
  & .toast-enter {
    opacity: 0;
    height: 0;
    transform: translateY(10px);
  }
  & .toast-enter-active {
    opacity: 1;
    height: 41px;
    transform: translateY(0px);
  }
  & .toast-leave {
    opacity: 1;
    transform: translateY(0px);
  }
  & .toast-leave-active {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  & .wrap {
    margin-bottom: 10px;
    text-align: right;
    font-size: 0;
    transition: height .3s, opacity .3s, transform .3s;
  }
  
  & .message {
    display: inline-block;
    min-width: 280px;
    overflow: hidden;
    height: 41px;
    padding: 10px 20px;
    background: rgba(0,0,10,0.4);
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    border-radius: 2px;
    color: #fff;
    font-size: 13px;
    white-space: nowrap;
    text-align: center;
  }
`;

const Toast = () => {
  const toast = useSelector(state => state.toast);

  return (
    <ToastStyle>
      <ReactCSSTransitionGroup
        transitionName="toast"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {toast.map(t => (
          <div key={t.id} className="wrap">
            <div className="message">{t.message}</div>
          </div>
        ))}
      </ReactCSSTransitionGroup>
    </ToastStyle>
  );
};

export default Toast;
